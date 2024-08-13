import NavigationPage from '../Pages/NavigationPage';

describe('Navigation Tests', () => {
    const navigationPage = new NavigationPage();

    // Navigation Test
    it('NavigationTest', () => {
        navigationPage.visitOpencart();
        navigationPage.verifyHomePageTitle();  // Verify home page

        navigationPage.clickCameraLink();  // Navigate to camera page
        cy.wait(5000);
        navigationPage.checkWidgetCheckbox();
        navigationPage.verifyCamerasHeader();  // Verify cameras page

        cy.go("back");  // Navigate back
        navigationPage.verifyHomePageTitle();  // Verify home page

        cy.go("forward");  // Navigate forward to camera page
        cy.wait(5000);
        navigationPage.checkWidgetCheckbox();
        navigationPage.verifyCamerasHeader();  // Verify cameras page

        cy.go(-1);  // Navigate back
        navigationPage.verifyHomePageTitle();  // Verify home page

        cy.go(1);  // Navigate forward to camera page
        cy.wait(5000);
        navigationPage.checkWidgetCheckbox();
        navigationPage.verifyCamerasHeader();  // Verify cameras page

        navigationPage.reloadPage();  // Reload the page
    });
});
