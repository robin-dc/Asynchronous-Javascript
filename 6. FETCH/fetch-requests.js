/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
async function printStatus(){
    const result = await fetch(`/products`)
    console.log(result.status)
}
printStatus()

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
async function printStatusOk(){
    const result = await fetch(`/products`)
    console.log(result.ok)
}
printStatusOk()

/* =================== 3. Print the Content-Type Header =================== */

// Your code here
async function printHeader(){
    const result = await fetch(`/products`)
    console.log(result.headers.get('Content-Type'))
}
printHeader()

/* ============== 4. Print the body of the response as text =============== */

// Your code here
async function printText(){
    const result = await fetch(`/products`)
    const txt = await result.text()
    console.log(txt)
}
printText()
