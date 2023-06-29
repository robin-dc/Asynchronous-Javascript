/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here Formulating the body of the request

function sendRequest(){
    const url = '/products'
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    const body = "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"

    const options = {
        method: 'POST',
        headers: headers,
        body: body
    }
    return fetch(url, options)
}

/* ============================== Phase 2 ============================== */

// Your code here  Reading the Response Components

async function readResponse(){
    const url = '/products'
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    const body = "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"

    const options = {
        method: 'POST',
        headers: headers,
        body: body
    }
    const response = await fetch(url, options)
    console.log(response.status)
    console.log(response.url)
    console.log(response.headers.get('Content-Type'))
    console.log(response.redirected)
}

/* ============================== Phase 3 ============================== */

// Your code here URLSearchParams

async function readResponse(){
    const url = '/products'
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    const body = new URLSearchParams({
        name: "Milo",
        description: "Made by Manatee Coffee",
        price: 11.99,
        categories: "grocery"
    })

    const options = {
        method: 'POST',
        headers: headers,
        body: body
    }
    const response = await fetch(url, options)
    console.log(response)
}

//}))
// URLSearchParams {size: 4}

// [[Prototype]]

// ƒ append()
// ƒ delete()
// ƒ entries()
// ƒ forEach()
// ƒ getAll()
// ƒ has()
// ƒ keys()
// ƒ sort()
// ƒ toString()
// ƒ values()
