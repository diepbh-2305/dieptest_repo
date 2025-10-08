import { test, expect } from '@playwright/test';

test('login successful', async ({ page }) => {
  const baseUrl = 'https://www.saucedemo.com/'; // const vì không đổi
 

  await page.goto(baseUrl);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button'); // <-- chọn theo id
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible(); // Kiểm tra trang đã render danh sách sản phẩm thật
});

test('login failed by wrong pass', async ({ page }) => {
  const baseUrl = 'https://www.saucedemo.com/'; // const vì không đổi
  
  await page.goto(baseUrl);

  // Nhập sai username hoặc password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'incorrectpwd');
  await page.click('#login-button'); // <-- chọn theo id

   // Xác minh URL vẫn là trang login (không redirect)
  await expect(page).toHaveURL(baseUrl);
  
  // Kiểm tra thông báo lỗi hiển thị đúng
  const errorMessage = page.locator('[data-test="error"]'); //Lấy phần tử hiển thị lỗi
  await expect(errorMessage).toBeVisible(); // Kiểm tra lỗi có hiển thị
  await expect(errorMessage).toHaveText( 
    'Epic sadface: Username and password do not match any user in this service'
  ); //Kiểm tra nội dung lỗi đúng như mong đợi

});
 
test('login failed by locked user', async ({ page }) => {
  const baseUrl = 'https://www.saucedemo.com/'; // const vì không đổi
  
  await page.goto(baseUrl);

  // Nhập sai username hoặc password
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button'); // <-- chọn theo id

   // Xác minh URL vẫn là trang login (không redirect)
  await expect(page).toHaveURL(baseUrl);
  
  // Kiểm tra thông báo lỗi hiển thị đúng
//   const errorMessage = page.locator('[data-test="error"]'); //Lấy phần tử hiển thị lỗi
//   await expect(errorMessage).toBeVisible(); // Kiểm tra lỗi có hiển thị
//   await expect(errorMessage).toHaveText( 
//     'Epic sadface: Username and password do not match any user in this service'
//   ); //Kiểm tra nội dung lỗi đúng như mong đợi
  await expect(page.locator('[data-test="error"]'))
  .toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

