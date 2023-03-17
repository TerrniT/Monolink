import { test, expect } from "@playwright/test"

test('should navigate to the landging page', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('text=Home')
  await expect(page).toHaveURL('http://localhost:3000/home')
  await expect(page.locator('h1')).toContainText('Hey! Your first test')
})
