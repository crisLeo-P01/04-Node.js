const puppeteer = require('puppeteer');

// Que por default tome el viewport a una resolucion que nosotros le indiquemos
/* const browser =await puppeteer.launch({
  defaultViewport: {
    width: 1080,
    height: 1920
  }
}); */

(async () => {
  const browser =await puppeteer.launch({
    defaultViewport: {
      width: 1080,
      height: 1920
    },
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('https://www.google.com.ar');
  // await page.screenshot({path: 'google01.jpg'});
  await page.type('.gLFyf', 'Buscar tutoriales de PUPPETEER').press('Enter');
  await page.screenshot({path: 'google01.jpg'});
  // await browser.close();
})();