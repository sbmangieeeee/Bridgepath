import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 3,
  use: { baseURL: "http://localhost:3100", trace: "retain-on-failure" },
  projects: [
    { name: "desktop-1440x900", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "tablet-landscape-1180x820", use: { ...devices["Desktop Chrome"], viewport: { width: 1180, height: 820 }, hasTouch: true } },
    { name: "mobile-landscape-844x390", use: { ...devices["Desktop Chrome"], viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true } },
  ],
});
