import { expect } from "@playwright/test"

exports.loginPage = class loginPage{


    constructor(page){

         this.page = page
         this.logo = page.getByAltText('company-branding')
         this.usernameInput = page.locator('//input[@name="username"]')
         this.passwordInput = page.locator('input[name="password"]')
         this.loginButton = page.locator('button[type="submit"]')
         this.loginErrorMessage = page.locator('//p[text()="Invalid credentials"]')

    }

    async launchtheApplication(){

        await this.page.goto("/web/index.php/auth/login")
    }

    async loginwithCreds(username, password){

        await this.usernameInput.pressSequentially(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()

    }

    async loginError(){

        await expect(this.loginErrorMessage).toBeVisible()
    }

    async loginSuccess(){

        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

}

