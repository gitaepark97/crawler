const puppeteer = require('puppeteer')
const config = require('./config')

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

const crawler = async () => {
  const date = new Date()

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(config.url)
  await page.setViewport({ width: 1920, height: 1080 })
  await timeout(3000)
  await page.screenshot({ path: `./screenshot/${date}.png` })

  await browser.close()
}

crawler()
setInterval(crawler, 1000 * 60 * config.interval_time)
