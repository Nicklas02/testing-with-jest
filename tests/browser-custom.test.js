const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5);

beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

it('Should show the element on top of the stack after pushing', async () => {
const pushButton = await driver.findElement(By.id('push'));
await pushButton.click();
const alert = await driver.switchTo().alert();
await alert.sendKeys("Nicke");
await alert.accept();

const peekButton = await driver.findElement(By.id('peek'));
await peekButton.click();

const topOfStack = await driver.findElement(By.id('top_of_stack')).getText();

expect(topOfStack).toBe("Fail");
});
