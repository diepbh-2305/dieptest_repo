import { test, expect } from '@playwright/test'; 

test('mở trang chủ Google', async ({ page }) => {
  // Điều hướng đến trang Google
  await page.goto('https://www.google.com');

  // Kiểm tra tiêu đề trang có chứa từ "Google"
  await expect(page).toHaveTitle(/Google/);
});