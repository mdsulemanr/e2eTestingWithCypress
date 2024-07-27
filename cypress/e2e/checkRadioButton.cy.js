import RadioButtonPage from '../Pages/RadioButton';

describe('Check Radio Buttons', () => {
    const radioButtonPage = new RadioButtonPage();

    beforeEach('visit site', () => {
        radioButtonPage.visit();
    });

    it("Select radio buttons", () => {
        // Check radio buttons are visible
        radioButtonPage.verifyMaleRadioButtonVisible();
        radioButtonPage.verifyFemaleRadioButtonVisible();

        // Check radio buttons are checked
        radioButtonPage.checkMaleRadioButton();
        radioButtonPage.verifyMaleRadioButtonChecked();
        radioButtonPage.verifyFemaleRadioButtonNotChecked();

        // Check radio buttons are checked
        radioButtonPage.checkFemaleRadioButton();
        radioButtonPage.verifyFemaleRadioButtonChecked();
        radioButtonPage.verifyMaleRadioButtonNotChecked();
    });

    it("Select check boxes", () => {
        // Check check boxes are visible
        radioButtonPage.verifySundayCheckboxVisible();
        radioButtonPage.verifyMondayCheckboxVisible();

        // Select and unselect check box
        radioButtonPage.checkMondayCheckbox();
        radioButtonPage.verifyMondayCheckboxChecked();
        radioButtonPage.uncheckMondayCheckbox();
        radioButtonPage.verifyMondayCheckboxNotChecked();

        // Select and unselect all check boxes
        radioButtonPage.checkAllCheckboxes();
        radioButtonPage.verifyAllCheckboxesChecked();
        radioButtonPage.uncheckAllCheckboxes();
        radioButtonPage.verifyAllCheckboxesNotChecked();

        // Select first and last check box
        radioButtonPage.checkFirstCheckbox();
        radioButtonPage.verifyFirstCheckboxChecked();
        radioButtonPage.checkLastCheckbox();
        radioButtonPage.verifyLastCheckboxChecked();
    });
});
