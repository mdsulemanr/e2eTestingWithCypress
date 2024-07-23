/* Page Object Class for Login
There are multiple ways of creating Page Object Class, here is an otherway
*/

class Login2
{
    // instance variables - putting elements here
    txtUserName="input[placeholder='Username']"
    txtPassword="input[placeholder='Password']"
    btnSubmit="button[type='submit']"
    txtVerifyLogin=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

    // static methods (action methods) - using above elements (stored in variables)
    setUserName(username)
    {
        cy.get(this.txtUserName).type(username) // this keyword representing this class

    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)

    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()

    }

    verifyLogin()
    {
        cy.get(this.txtVerifyLogin).should("have.text", "Dashboard")
    }

}

export default Login2;   // export this class
