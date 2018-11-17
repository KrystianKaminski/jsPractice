const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject([523, 883, 432, 974]);
    }, 1500)
})

getIDs
    .then(IDs => {
        console.log(IDs)
    })
    .catch(error => {
        console.log(`Error!`)
    })