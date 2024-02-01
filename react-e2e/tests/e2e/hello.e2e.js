const HelloPage = require('../pages/hello.page');

describe('My hello world page', () => {
    it('test 1 - should toggle', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting();
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });

    it('test 2 - should not toggle', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('dssdsd');
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });
});
