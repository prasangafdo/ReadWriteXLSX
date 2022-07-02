import SecurePage from '../pageobjects/secure.page';
import Landing from '../pageobjects/landing.page';

describe('Ikman.lk', () => {
    it('test the page is loading', async () => {
        await Landing.open();
        expect(await Landing.isCompanyLogoDisplaying()).toBeTruthy()
    });

    it('test user can search cars ', async ()=> {
        await Landing.open();
        await Landing.navigateToVehicles()
    });
});


