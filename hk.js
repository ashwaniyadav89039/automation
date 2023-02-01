const { rejects } = require('assert')
const { REFUSED } = require('dns')
const { resolve } = require('path')
const puppeteer = require('puppeteer')

const codeObj = require('./code')

const loginLink = 'https://www.hackerrank.com/auth/login' 

const email = 'xamot46817@stvbz.com'

const passward = '222525';



(async function(){
try {
    let browserInstance= await puppeteer.launch({

        headless : false,
    
        args : ['--start-maximized'],
    
        defaultViewport : null
    })

    let newTab = await  browserInstance.newPage();
    await newTab.goto(loginLink)
    await newTab.type("input[id='input-1']" ,email ,{delay : 50})
    await newTab.type("input[id='input-2']" ,passward,{delay : 50})
    await newTab.click('button[data-analytics="LoginPassword"]',{delay : 50})
    await waitAndClick('.topic-card a[data-attr1="algorithms"]' , newTab,{delay : 50})
    await waitAndClick('input[value="warmup"]', newTab)
    let allChallenges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled' ,{delay : 50})
    console.log('total questions' , allChallenges.length)
    
    // await questionSolver('.monaco-editor.no-user-select.vs',newTab)
   

} catch (error) {
    console.log(error)
}
})()

 

// browserOpen.then(function(browserObj){
//     let browserOpenPromise = browserObj.newPage()
//     return browserOpenPromise
// }).then(function(newTab){
   
//     page = newTab

//     let hackerRankOpenPromise = newTab.goto(loginLink)
//     return hackerRankOpenPromise
// }).then(function(){
//     let emailIsEntered = page.type("input[id='input-1']" ,email ,{delay : 50})
//     return emailIsEntered
// }).then(function(){
//     let passwardIsEntered = page.type("input[id='input-2']" ,passward,{delay : 50})
//     return passwardIsEntered
// }).then(function(){
//     let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]',{delay : 50})
//     return loginButtonClicked
// }).then(function(){
//     let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]' , page ,{delay : 50})
//     return clickOnAlgoPromise
// }).then(function(){
//     let getToWarmUp = waitAndClick('input[value="warmup"]' , page)
//     return getToWarmUp
//  })
//  //.then(function(){
// //     let waitfor3Secomnds = page.waitFor(3000)
// //     return waitfor3Secomnds
// //})
// .then(function(){
//     let allChallengesPromise = page.$$('.cta-container',{delay :50})
//     return allChallengesPromise
// }).then(function(questionsArr){
//      console.log('number of question' ,questionsArr.length)
//      let questionWillBeSolved = questionSolver(page ,questionsArr[0], codeObj.answers )
//      return questionWillBeSolved 
// })

async function waitAndClick(selector , cPage){
    await cPage.waitForSelector(selector)

    let selectorClicked = cPage.click(selector)
    return selectorClicked
}



// function waitAndClick(selector ,cPage){
//     return new Promise(function(resolve,rejects){
//         let waitForModePromise = cPage.waitForSelector(selector)
//         waitForModePromise.then(function(){
//             let clickModal = cPage.click(selector)
//             return clickModal
//         }).then(function(){
//             resolve()
//         }).catch(function(){
//             rejects()
//         })
//     })
// }

//  async function questionSolver(page, question ){
//     await page.waitForQuestion(question)

//     let questionWillBeClicked

// }


// function questionSolver(page, question ,answer){
//     return new Promise(function(resolve , rejects){
//         let questionWillBeClicked = question.click()
//          questionWillBeClicked.then(function(){
//            let EditorInFocuspromise = waitAndClick('.monaco-editor.no-user-select.vs',page)
//             return EditorInFocuspromise
//         }).then(function(){
//             return waitAndClick('.checkbox-input',page)
//         }).then(function(){
//             return page.waitForSelector('textarea.custominput',page)

//         }) .then(function(){
//              return page.type('textarea.custominput', answer,{delay:10})
//         }).then(function(){
//             let ctrlIsPressed = page.keyboard.down('control')
//             return ctrlIsPressed
//         }).then(function(){
//             let AisPressed = page.keyboard.press('A' , {delay : 100})
//             return AisPressed
//         }).then(function(){
//             let XisPressed = page.keyboard.press('X' ,{delay: 100})
//             return XisPressed
//         })

//      })

    
//  }