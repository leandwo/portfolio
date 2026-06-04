import { chromium } from 'playwright';

const OUT = 'public/screenshots';
const PW = 'maple-stone-9308';

const browser = await chromium.launch();

async function shot(page, path) {
  await page.screenshot({ path: `${OUT}/${path}`, fullPage: false });
  console.log(`saved ${path}`);
}

async function clickByText(page, text) {
  await page.evaluate((t) => {
    const el = Array.from(document.querySelectorAll('button, a')).find(
      el => el.textContent?.trim().includes(t)
    );
    if (el) el.click();
    else throw new Error(`Element with text "${t}" not found`);
  }, text);
  await page.waitForTimeout(1500);
}

async function loginInventory(page) {
  await page.goto('https://inventory.ko.church', { waitUntil: 'networkidle' });
  await page.fill('input[type="password"]', PW);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('networkidle');
}

{
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await loginInventory(page);
  await shot(page, 'church-inventory-1.png');

  await clickByText(page, 'All Items');
  await shot(page, 'church-inventory-2.png');

  await page.close();
}

await browser.close();
