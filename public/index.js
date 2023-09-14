document.addEventListener("DOMContentLoaded", async function () {
    try {
        const normalFunction = 'https://sprightly-melba-c465f8.netlify.app/.netlify/functions/hello'
        const backgroundFunction = 'https://sprightly-melba-c465f8.netlify.app/.netlify/functions/hello-background'
        
        const options = {
            method: 'POST',
            headers: {},
            body: JSON.stringify({})
        }

        const responseOne = await fetch(normalFunction, options)
        const responseTwo = await fetch(backgroundFunction, options)

        if (responseOne.status === 200) {
            console.log('Received 200 from normal function.')
        }

        if (responseTwo.status === 202) {
            console.log('Received 202 from background function.')
        }
        
    } catch (error) {
        console.log(error)
    }
})