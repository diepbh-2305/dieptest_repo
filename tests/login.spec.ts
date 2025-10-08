import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  const baseUrl = 'https://www.saucedemo.com/'; // const vì không đổi
  //let loginAttempts = 0; // let vì sẽ tăng dần khi retry

  await page.goto(baseUrl);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button'); // <-- chọn theo id
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

  //loginAttempts++;
  //console.log(`Đã thử login ${loginAttempts} lần`);
//});


