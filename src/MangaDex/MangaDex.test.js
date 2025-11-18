// Example MangaHere.test.js
const {expect} = require('chai')

exports.runTests = async function(testCase, testData, source, defaultTests) {
    // await defaultTests(testCase, testData, source)
    await testCase('test getMangaDetails', async () => {
        const manga = await source.getViewMoreItems("latest_updates", undefined)
        expect("hi").to.equal("hi")
    })
    await testCase('test getHomepageSections', async() => {
        await source.getHomePageSections((section) => {
            // if (section.id === "latest_updates") {
            //     console.log(section.items)
            // }
        })
        expect("hi").to.equal("hi")
    })
}