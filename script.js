//Linkedin Automation 
// Imports

const puppeteer = require('puppeteer');





// starting the process
(async()=>{
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://mr-internetix.tk')


})();
