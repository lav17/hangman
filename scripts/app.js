//book ----> Object.prototype----> null
// const book = {
//     b_name:'sleeping beauty'
// }
// const book = new Object()
// book.name = 'sleeping beauty'
// Object.prototype.somenewmethod = () => 'this is new method'
// console.log(book.somenewmethod())
// console.log(book)

// const cars = new Array(['bmw','mercedes','audi'])
// console.log(cars)
// console.log(cars.hasOwnProperty('filter'))
const puzzleEl = document.querySelector('#puzzle')
//puzzleEl.textContent = game1.getPuzzle()

const guessEl =  document.querySelector('#guessleft')
//guessEl.textContent = game1.guesslimit

//const msgEl =  document.querySelector('#msg')
//msgEl.textContent = game1.getMsg()

let game1

// console.log(game1.getPuzzle())
// console.log(game1.guesslimit)
// console.log(game1.status)
// console.log(game1.getMsg())

 window.addEventListener('keypress',function(e){
     const guess = String.fromCharCode(e.charCode)
     game1.makeGuess(guess)
    render()
 })

 render = ()=>{
    puzzleEl.innerHTML = ''//clear all the html inside of puzzleEL div tag
    guessEl.textContent = game1.getMsg()

    game1.Puzzle().split('').forEach((letter) => {
       const letterEl = document.createElement('span')
       letterEl.textContent = letter
       puzzleEl.appendChild(letterEl)
       
    });
 }

 startpuzzle= async ()=>{
    const data = await getPuzzle('2')
    game1 = new Hangman(data.puzzle,5)
    render()}

document.querySelector('#reset').addEventListener('click', startpuzzle)

startpuzzle()

// getPuzzle(3).then((data)=>
// {
//     console.log(data.puzzle)
// }).catch((err)=>{
//     console.log(`error is ${err}`)
// })

// challenge().then((data)=>
// {
//     console.log(data.city)
//     console.log(data.country)
// }).catch((err)=>{
//     console.log(`error is ${err}`)
// })

//  getpuzzle((error,puzzle)=>{
//     if(error){
//         console.log(`the error is ${error}`)
//     }
//     else{
//     console.log(puzzle)}
// })

// const puzzle = getpuzzlesync()
// console.log(puzzle)

// console.log('hello')
// getusers((error,street)=>{
//     if(error){
//         console.log(`the error is ${error}`)
//     }
//     else{
//     console.log(street)}
// })

// p.then((data)=>
// {
//     console.log(`${data}`)
// },(err)=>{
//     console.log(`${err}`)
// })

// fetch('http://puzzle.mead.io/puzzle',{}).then((response)=>{
//     if(response.status === 200){
//         return response.json()
//     }else{
//         throw new Error('some error occred')
//     }
// }).then((data)=>{
//       console.log (data.puzzle)
// }).catch((err)=>{
//     console.log(`${err}`)
// })