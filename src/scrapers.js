const puppeteer = require('puppeteer');
const db = require('./database');



async function scrape(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const el2 = await page.evaluate( () => {
        return Array.from(document.querySelectorAll('h3.member-card__full-name')).map(partner => partner.innerText.trim());
    })

    const el1 = await page.evaluate( () => {
        return Array.from(document.querySelectorAll('img[class="member-card__photo"]')).map(partner => partner.getAttribute('src'));
    })
   
    browser.close();

    return {el2, el1};
    
}


module.exports = {
    scrape
}
