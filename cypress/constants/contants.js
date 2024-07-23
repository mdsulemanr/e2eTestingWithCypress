// cypress/constants/constants.js

export const URLS = {
    loginPage: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    // Add other URLs here
};

export const SELECTORS = {
    login: {
        usernameInput: "input[placeholder='Username']",
        passwordInput: "input[placeholder='Password']",
        submitButton: "button[type='submit']",
        userDropdownName: ".oxd-userdropdown-name",
        logo: '.orangehrm-login-branding > img',
        links: '//a',
    },
    // Add other selectors here
};

export const TEXTS = {
    login: {
        partialUrl: 'orangehrmlive.com',
        exactUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        urlFragment: 'orangehrm',
        incorrectUrlFragment: 'greenhrm',
        titleContains: 'Orange',
        exactTitle: 'OrangeHRM',
        titleFragment: 'HRM',
        linksCount: '5',
        username: 'Admin',
        expectedName: 'Ravi Arole',
    },
    // Add other texts here
};

export const EXPECTED_VALUES = {
    login: {
        username: 'Admin',
    },
    // Add other expected values here
};
