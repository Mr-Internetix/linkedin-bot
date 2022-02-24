//Linkedin Automation -- @mr-internetix
// Imports

import {connectHr} from './scripts/connectHr.mjs';
import puppeteer from 'puppeteer';






// starting the process
(async()=>{
  const browser = await puppeteer.launch({headless:false,defaultViewport:null, args: ['--window-size=1920,1080'],})
  const page =  await browser.newPage()
  
  // Actions 
  await page.goto('https://www.linkedin.com/login',{ waitUntil: 'networkidle0' })
  await login(page)
  await page.waitForTimeout(4000)
  await followHr(page)


})();



async function login(page){
    
  Promise.all([
  // username
  await page.type('#username','yadavajit8916@gmail.com'),

  // password 
  await page.type('#password','W,Jc99r7CU7hv/_'),

  // submit 
  await page.click('[type="submit"]'),
  //
  await page.waitForNavigation()
  
  ])
   

}



async function followHr(page){
    await page.waitForTimeout('[placeholder="Search"]')
    await page.type('[placeholder="Search"]',"Hr");
    await page.keyboard.press('Enter');
    // finding nore results 
    await page.waitForNavigation()
    await page.evaluate(()=>{
        Array.from(document.getElementsByClassName("app-aware-link")).map(btn => btn.innerText == "See all people results" ? btn.click() : null) 
    })
  
}


