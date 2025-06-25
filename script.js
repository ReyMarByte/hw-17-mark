console.log("Waiting for results of the test...")

const magic100$ = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomMark = Math.floor(Math.random() * 6) + 1
        if (randomMark === 4 || randomMark === 5 ) {
            resolve(`I'm Happy! I'm getting money for a "${randomMark}"!`)
        } else if (randomMark >= 1 && randomMark <= 3) {
            reject(`I tried, but failed with a "${randomMark}"!`)
        } else if (randomMark === 6) {
            reject(new Error(`I cheated and accidentaly write the "${randomMark}" in res`))
        }
    }, 1000)
})

setTimeout(() => {
    console.log("That how it went...")
}, 2000)

magic100$
    .then(res => {
        console.log("Got a results: ", res)
    })
    .catch((error) => {
        if (error instanceof Error) {
            console.error(error.message)
        } else {
            console.log("Got a results: ", error)
        }
    })

console.log("I was very nervous...")