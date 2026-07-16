import { expect, test } from "@playwright/test";

test("parent creates a child and reaches orientation", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Adventure. Enter Storypath Village/ }).click();
  await page.getByRole("button", { name: /I’m a Parent/ }).click();
  await page.getByLabel("Email address").fill("parent@example.com");
  await page.getByRole("button", { name: "Continue securely" }).click();
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Record consent" }).click();
  await page.getByLabel("Nickname").fill("Kai");
  const pinGroup = page.getByRole("group", { name: /Choose four picture signs/ });
  for (const symbol of ["🌞", "🥭", "🐢", "⭐"]) await pinGroup.getByRole("button", { name: symbol }).click();
  await page.getByRole("button", { name: "Meet Niko and Zuri" }).click();
  await expect(page.getByText(/Hi Kai/)).toBeVisible();
});

test("saved family can enter with family code", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("bridgepath-pilot-state-v1", JSON.stringify({
    parentEmail: "parent@example.com", consentedAt: new Date().toISOString(), familyCode: "PATH-326",
    children: [{ id: "kai", name: "Kai", standard: 3, avatar: "🦜", pin: ["🌞", "🥭", "🐢", "⭐"], narration: true, reducedMotion: false }],
    activeChildId: null, completedStops: 0, attempts: 0, evidence: [], streak: 1, lastActiveAt: null,
  })));
  await page.goto("/");
  await page.getByRole("button", { name: /Adventure. Enter Storypath Village/ }).click();
  await page.getByRole("button", { name: /I’m a Child/ }).click();
  await page.getByLabel("Family code").fill("PATH-326");
  await page.getByRole("button", { name: /Kai/ }).click();
  for (const symbol of ["🌞", "🥭", "🐢", "⭐"]) await page.getByRole("button", { name: symbol }).click();
  await page.getByRole("button", { name: "Open my path" }).click();
  await expect(page.getByText(/Hi Kai/)).toBeVisible();
});

test("market unit displays a sequential village path without voice controls", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("bridgepath-pilot-state-v1", JSON.stringify({
    parentEmail: "parent@example.com", consentedAt: new Date().toISOString(), familyCode: "PATH-326",
    children: [{ id: "kai", name: "Kai", standard: 3, avatar: "🦜", pin: ["🌞", "🥭", "🐢", "⭐"], narration: false, reducedMotion: false }],
    activeChildId: "kai", completedStops: 0, attempts: 0, evidence: [], streak: 1, lastActiveAt: null,
  })));
  await page.goto("/");
  await page.getByRole("button", { name: /Adventure. Enter Storypath Village/ }).click();
  await page.getByRole("button", { name: /Riverside Market/ }).click();
  await expect(page.getByRole("heading", { name: "Market Day" })).toBeVisible();
  await expect(page.getByRole("list", { name: "Market Day learning path" }).getByRole("listitem")).toHaveCount(6);
  await expect(page.getByRole("button", { name: /A market mystery. Start this step/ })).toBeEnabled();
  await expect(page.getByRole("button", { name: /Money in action. Locked/ })).toBeDisabled();
  await expect(page.getByRole("button", { name: /narration|hear|voice/i })).toHaveCount(0);
});

test("launch hub exposes five accessible destinations and private previews", async ({ page }) => {
  await page.goto("/");
  const hub = page.getByRole("navigation", { name: "Choose an area of Storypath Village" });
  await expect(hub.getByRole("button")).toHaveCount(5);
  await hub.getByRole("button", { name: /Customize Explorer/ }).click();
  await expect(page.getByRole("dialog", { name: "Customize Explorer" })).toBeVisible();
  await page.getByRole("button", { name: "Back to the village" }).click();
  await hub.getByRole("button", { name: /My Achievements/ }).click();
  const achievementPreview = page.getByRole("dialog", { name: "My Achievements" });
  await expect(achievementPreview).toContainText("private board");
  await expect(achievementPreview).not.toContainText(/leaderboard|rank children/i);
});

test("parent area is always reachable without adventure progress", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Parent Area/ }).click();
  await expect(page.getByRole("heading", { name: "Start your family path" })).toBeVisible();
});
