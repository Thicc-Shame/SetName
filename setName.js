const puppeteer = require('puppeteer')

async function main() {

    const newname = process.argv[2]
    console.log(newname)
    console.log("Posting uncensored hentai...")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({width:1920,height:1080})
    await page.goto("https://github.com/login")
    await page.type("#login_field","Thicc-Shame")
    await page.type("#password",process.env.GITHUB_PWD) //Hi Andy! Hunter chose this password, you cannot begin to fathom how few shits I give
    await page.click('[name="commit"]')
    await page.waitForNavigation()

    await page.goto("https://github.com/settings/profile")

    const name = await page.$$(".form-control")
    await name[3].type("b")
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await name[3].type(newname)

    const update = await page.$$(".btn.btn-primary")
    await update[1].click()

    await page.screenshot({path:'bbrian.png'})
    await browser.close()
    console.log("Check the output faggot")
}

main()
