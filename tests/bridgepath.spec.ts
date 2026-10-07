import { expect, test } from "@playwright/test";

test("concept checkpoint preserves identity and all 18 stops without old artwork", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Storypath", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Paralin", exact: true })).toBeVisible();
  await expect(page.getByText(/Aaliyah and Theo/)).toBeVisible();
  await expect(page.getByRole("list", { name: "Protected learning stops" }).getByRole("listitem")).toHaveCount(18);
  await expect(page.locator("img, svg, canvas")).toHaveCount(0);
  await expect(page.locator("body")).not.toContainText(/Niko|Zuri|Kairana|Arouca Grove/);
});

test("legacy community address leads to the current concept checkpoint", async ({ page }) => {
  await page.goto("/arouca-groove");
  await expect(page).toHaveURL("/");
  await expect(page.getByRole("heading", { name: "Paralin", exact: true })).toBeVisible();
});
