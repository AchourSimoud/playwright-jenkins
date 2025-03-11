import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import Inventory from '../pages/inventory.page';


test('Add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new Inventory(page);

  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifySuccessfulLogin();

  await inventoryPage.verifyInventoryPage();
  await inventoryPage.addToCart();
  await inventoryPage.verifyCartBadge('1');
});