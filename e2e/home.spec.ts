import { test, expect } from "@playwright/test";

test("page d’accueil se charge", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/355 Capital/i);
});
