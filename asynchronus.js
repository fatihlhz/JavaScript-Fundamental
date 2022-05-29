// // Callback
// const callData = res => {
//     setTimeout(() => {
//         const data = "Muhammad";
//         res(data)
//     }, 1000)
// }

// // callData(name => console.log(name))

// // Chaining Callback
// const callFull = (req, res) => {
//     setTimeout(() => {
//         const data = `${req} Al Fatih`;
//         res(data);
//     }, 1000)
// }

// callData(first => callFull(first, full => console.log(full)));


// Promise
const firstName = () => {
    return new Promise(res => {
        setTimeout(() => {
            const data = "Muhammad";
            res(data);
        }, 1000)
    })
}

const lastName = name => {
    return new Promise(res => {
        setTimeout(() => {
            const data = `${name} Al Fatih`;
            res(data);
        }, 1000)
    })
}

// firstName().then(data => lastName(data)).then(result => console.log(result))

const resultName = async () => {
    const first = await firstName();
    const last = await lastName();
    return `${first} ${last}`
}

resultName().then(res => console.log(res))