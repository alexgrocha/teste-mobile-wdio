describe('Primeiro teste', () => {
    it('Acessar o menu forms', async () =>{
        await $('~Forms').click()
        await $('~text-input').waitForExist({timeout: 30000})
        await $('~text-input').setValue('Teste preencher')
        await $('~switch').click()
        await $('android=new UiSelector().text("Active")').click()
        expect(await $('~text-input')).toBeDisplayed()
    });
});
