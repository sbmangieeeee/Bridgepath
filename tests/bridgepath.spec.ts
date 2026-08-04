import { expect, test, type Page } from "@playwright/test";

async function expectSharedMarketArtboard(page: Page, backgroundRole: string, counterRole: string) {
  const viewportSize = page.viewportSize();
  const viewport = page.locator(".market-scene-viewport");
  const artboard = page.locator(".market-scene-artboard");
  const layers = page.locator(".market-visual-layer");
  const viewportBox = await viewport.boundingBox();
  const artboardBox = await artboard.boundingBox();

  expect(viewportSize).not.toBeNull();
  expect(viewportBox).toEqual({ x: 0, y: 0, width: viewportSize!.width, height: viewportSize!.height });
  expect(artboardBox).not.toBeNull();
  expect(artboardBox!.width).toBeGreaterThanOrEqual(viewportSize!.width);
  expect(artboardBox!.height).toBeGreaterThanOrEqual(viewportSize!.height);

  await expect(layers).toHaveCount(4);
  for (let index = 0; index < 4; index += 1) {
    expect(await layers.nth(index).boundingBox()).toEqual(artboardBox);
  }

  await expect(page.locator(`[data-asset-role="${backgroundRole}"]`)).toBeVisible();
  await expect(page.locator(`[data-asset-role="${counterRole}"]`)).toBeVisible();
  await expect(page.locator(".market-character-layers img")).toHaveCount(0);
  await expect(page.locator(".market-activity-object-layers").locator("img, button")).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(viewportSize!.width);
  expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBeLessThanOrEqual(viewportSize!.height);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.removeItem("bridgepath-production-progress-v1"));
  await page.reload();
});

test("production route connects Welcome, StoryPath, Arouca Groove, and Corner Shop", async ({ page }) => {
  await page.getByRole("link", { name: "Enter StoryPath through the map hut" }).click();
  await expect(page).toHaveURL(/\/storypath$/);
  await expect(page.getByRole("heading", { name: "StoryPath map" })).toBeVisible();
  await page.getByRole("link", { name: "Arouca Groove. Available." }).click();
  await expect(page).toHaveURL(/\/arouca-groove$/);
  await expect(page.getByRole("heading", { name: "Arouca Groove" })).toBeVisible();
  await page.getByRole("link", { name: "The Corner Shop Challenge. Available" }).click();
  await expect(page).toHaveURL(/\/arouca-groove\/corner-shop-challenge$/);
  await expect(page.getByRole("heading", { name: "The Corner Shop Challenge" })).toBeVisible();
});

test("Arouca Groove exposes all 18 canonical hotspots and the accessible stop list", async ({ page }) => {
  await page.goto("/arouca-groove");
  const map = page.getByRole("region", { name: "Arouca Groove town map" });
  await expect(map.getByRole("link")).toHaveCount(1);
  await expect(map.getByRole("button")).toHaveCount(17);
  await expect(page.getByText("0/18")).toBeVisible();

  await page.getByRole("button", { name: "Open accessible 18-stop list" }).click();
  const dialog = page.getByRole("dialog", { name: "Arouca Groove: 18 stops" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("listitem")).toHaveCount(18);
  await expect(dialog.getByText("5. The Corner Shop Challenge")).toBeVisible();
});

test("Corner Shop renders three shared-artboard market compositions", async ({ page }, testInfo) => {
  await page.goto("/arouca-groove/corner-shop-challenge");
  await expect(page.getByRole("heading", { name: "$12 + $8" })).toBeVisible();
  const teacher = page.locator(".character-ms-leela .approved-character-sprite");
  await expect(teacher).toBeVisible();
  await expect(teacher).toHaveAttribute("src", "/assets/characters/mentors/ms-leela-maharaj-transparent.png");
  const teacherBox = await page.locator(".character-ms-leela").boundingBox();
  const lessonCopyBox = await page.locator(".teaching-board").locator(".stage-kicker, h2, .math-demo").evaluateAll((nodes) => {
    const boxes = nodes.map((node) => node.getBoundingClientRect());
    return {
      left: Math.min(...boxes.map((box) => box.left)),
      top: Math.min(...boxes.map((box) => box.top)),
      right: Math.max(...boxes.map((box) => box.right)),
      bottom: Math.max(...boxes.map((box) => box.bottom)),
    };
  });
  const viewport = page.viewportSize();
  expect(teacherBox).not.toBeNull();
  expect(viewport).not.toBeNull();
  expect(teacherBox!.x).toBeGreaterThanOrEqual(0);
  expect(teacherBox!.y).toBeGreaterThanOrEqual(0);
  expect(teacherBox!.x + teacherBox!.width).toBeLessThanOrEqual(viewport!.width);
  expect(teacherBox!.y + teacherBox!.height).toBeLessThanOrEqual(viewport!.height);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(viewport!.width);
  expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBeLessThanOrEqual(viewport!.height);
  await expect(page.getByRole("button", { name: "Replay" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Continue" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Lesson controls" })).toBeVisible();
  const overlapsLessonCopy = teacherBox!.x < lessonCopyBox.right
    && teacherBox!.x + teacherBox!.width > lessonCopyBox.left
    && teacherBox!.y < lessonCopyBox.bottom
    && teacherBox!.y + teacherBox!.height > lessonCopyBox.top;
  expect(overlapsLessonCopy).toBe(false);
  const placementVariables = await page.locator(".classroom-stage").evaluate((node) => ({
    left: getComputedStyle(node).getPropertyValue("--teacher-scene-left").trim(),
    bottom: getComputedStyle(node).getPropertyValue("--teacher-scene-bottom").trim(),
    height: getComputedStyle(node).getPropertyValue("--teacher-scene-height").trim(),
  }));
  expect(placementVariables.left).not.toBe("");
  expect(placementVariables.bottom).not.toBe("");
  expect(placementVariables.height).not.toBe("");
  await page.screenshot({ path: testInfo.outputPath("teacher-lesson.png"), fullPage: true });
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(page.getByText("Class Challenge", { exact: true })).toBeVisible();
  await page.getByLabel("Estimate ($)").fill("20");
  await page.getByLabel("Exact total ($)").fill("21");
  if (page.viewportSize()?.width === 844) {
    await page.setViewportSize({ width: 390, height: 844 });
    const orientationPrompt = page.getByRole("dialog", { name: "Turn your device sideways to continue." });
    await expect(orientationPrompt).toBeVisible();
    await expect(orientationPrompt).toBeFocused();
    await expect(page.locator(".gameplay-orientation-content")).toHaveAttribute("aria-hidden", "true");
    await page.screenshot({ path: testInfo.outputPath("mobile-portrait-rotation-prompt.png") });
    await page.setViewportSize({ width: 844, height: 390 });
    await expect(orientationPrompt).toHaveCount(0);
    await expect(page.getByText("Class Challenge", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Estimate ($)")).toHaveValue("20");
    await expect(page.getByLabel("Exact total ($)")).toHaveValue("21");
  }
  await page.getByRole("button", { name: "Check answer" }).click();
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(page.getByRole("heading", { name: "Would you like to go back to class, or are you ready for a mission?" })).toBeVisible();
  await page.getByRole("button", { name: "Start mission" }).click();
  await expect(page.getByRole("heading", { name: "Corner Shop introduction" })).toBeVisible();
  await expectSharedMarketArtboard(page, "marketEnvironmentStructure", "marketCounter");
  await page.screenshot({ path: testInfo.outputPath("market-introduction.png") });

  await page.getByRole("button", { name: "View child handoff" }).click();
  await expect(page.getByRole("heading", { name: "Child handoff view" })).toBeVisible();
  await expectSharedMarketArtboard(page, "marketEnvironmentStructure", "marketCounterChildView");
  await page.screenshot({ path: testInfo.outputPath("market-child-handoff.png") });

  await page.getByRole("button", { name: "View cashier position" }).click();
  await expect(page.getByRole("heading", { name: "Cashier view" })).toBeVisible();
  await expectSharedMarketArtboard(page, "marketCashierView", "marketCashierRegister");
  await page.screenshot({ path: testInfo.outputPath("market-cashier-view.png") });
  await page.getByRole("button", { name: "Finish composition preview" }).click();
  await expect(page.getByRole("heading", { name: "Mission complete!" })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("heading", { name: "$12 + $8" })).toBeVisible();
});

test("legacy Karina redirect, navigation controls, and keyboard focus remain available", async ({ page }) => {
  await page.goto("/karina");
  await expect(page).toHaveURL(/\/storypath$/);
  await expect(page.getByRole("link", { name: "Back to Bridgepath" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Bridgepath home" })).toBeVisible();
  await page.getByRole("button", { name: "Help" }).click();
  await expect(page.getByText("Choose a town pin. Arouca Groove is open now.")).toBeVisible();
  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.getByText("Settings are coming later.")).toBeVisible();

  await page.keyboard.press("Tab");
  const focused = page.locator(":focus");
  await expect(focused).toBeVisible();
  await expect(focused).toHaveCSS("outline-style", "solid");
});
