import { test, expect } from '@playwright/test';

import {loginPage} from "../pageobjects/loginpage.po"
import logindata from "../testData/login.json"

let page 
let login
test.beforeEach(async ({browser}) => {

    page = await browser.newPage()

    login = new loginPage(page)

    await login.launchtheApplication()
})

test("Login with valid Creds", async () =>{

    await login.loginwithCreds(logindata.username, logindata.password)
    await login.loginSuccess()
})

test("Login with valid username and Invalid password", async () =>{

    await login.loginwithCreds(logindata.username, logindata.invalidpassword)
    await login.loginError()
})

test("Login with invalid username and valid password", async () =>{

    await login.loginwithCreds(logindata.invalidusername, logindata.password)
    await login.loginError()
})

test("Login with invalid username and invalid password", async () =>{

    await login.loginwithCreds(logindata.invalidusername, logindata.invalidpassword)
    await login.loginError()
})