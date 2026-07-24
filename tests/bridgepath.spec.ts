import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.removeItem("bridgepath-production-progress-v1"));
  await page.reload();
});

test("production route connects Welcome, StoryPath, Arouca Groove, and Corner Shop", async ({ page }) => {
  await page.getByRole("link", { name: "Enter the adventure through the map hut" }).click();
  await expect(page).toHaveURL(/\/karina$/);
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

test("Corner Shop reaches the approved market compositions and reports missing customer art", async ({ page }, testInfo) => {
  await page.goto("/arouca-groove/corner-shop-challenge");
  await expect(page.getByRole("heading", { name: "$12 + $8" })).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(page.getByText("Class Challenge", { exact: true })).toBeVisible();
  await page.getByLabel("Estimate ($)").fill("20");
  await page.getByLabel("Exact total ($)").fill("21");
  await page.getByRole("button", { name: "Check answer" }).click();
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(page.getByRole("heading", { name: "Would you like to go back to class, or are you ready for a mission?" })).toBeVisible();
  await page.getByRole("button", { name: "Start mission" }).click();
  await expect(page.getByRole("heading", { name: "Mr. Ali needs help serving customers" })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("market-introduction.png"), fullPage: true });
  await page.getByRole("button", { name: "Take over the counter" }).click();
  await expect(page.getByRole("heading", { name: "Niko and Zuri are ready" })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("market-child-handoff.png"), fullPage: true });
  await page.getByRole("button", { name: "Serve first customer" }).click();
  await expect(page.getByRole("heading", { name: "Customer 0 of 5" })).toBeVisible();
  await expect(page.getByRole("status")).toContainText("blocked until the five approved transparent customer layers are supplied");
  await expect(page.getByText("market-customer-01.png")).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("market-serving-customer.png"), fullPage: true });
  await page.reload();
  await expect(page.getByRole("heading", { name: "$12 + $8" })).toBeVisible();
});

test("navigation controls and keyboard focus remain available", async ({ page }) => {
  await page.goto("/karina");
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
