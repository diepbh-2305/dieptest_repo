//Playwright test file 
import { test, expect } from '@playwright/test';

test.describe('Login feature', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    // 1️⃣ Mở trang login
    await page.goto('https://example.com/login');

    // 2️⃣ Nhập thông tin hợp lệ
    await page.fill('#username', 'testuser');
    await page.fill('#password', '123456');

    // 3️⃣ Nhấn login
    await page.click('#login-button');

    // 4️⃣ Kiểm tra kết quả mong đợi
    await expect(page).toHaveURL('https://example.com/dashboard');
  });
});