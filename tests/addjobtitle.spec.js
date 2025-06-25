import { test, expect } from '@playwright/test';

import {loginPage} from "../pageobjects/loginpage.po"

import {AdminPage} from "../pageobjects/addjobtitlepage.po"

import logindata from "../testData/login.json"

import jobtitledata from "../testData/addjobtitle.json"

let page 
let login
let addjob

test.beforeEach(async ({browser}) => {

    page = await browser.newPage()

    login = new loginPage(page)
    addjob = new AdminPage(page)

    await login.launchtheApplication()
})

test("Verify Add Job title", async () =>{

    await login.loginwithCreds(logindata.username, logindata.password)
    await login.loginSuccess()
    await addjob.navigateToJobTitles()
    await addjob.addJobTitle(jobtitledata.jobtitle)
})

