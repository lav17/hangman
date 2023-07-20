class Hangman{
    constructor(words,guesslimit){
        this.words = words.toLowerCase().split('')
        this.guesslimit=guesslimit
        this.guessedletter= []
        this.status = 'playing'
    }
    getstatus() {
       const finished = this.words.every((letter) => this.guessedletter.includes(letter) || letter === ' ')
            if (this.guesslimit <= 0) {
                this.status = 'failed'
            } else if (finished) {
                 this.status = 'finished'
             } else {
                 this.status = 'playing'
             }
      }
    getMsg() {
            if (this.status === 'playing') {
                return `Guesses left: ${this.guesslimit}`
            } else if (this.status === 'failed') {
                return `Nice try! The word was "${this.words.join('')}".`
            } else {
                return 'Great work! You guessed the work.'
            }
        }
    Puzzle(){
        let puzzle =''
            
        this.words.forEach((letter) => {
            if((this.guessedletter.includes(letter) || letter === ' '))
            {   puzzle =puzzle + letter}
            else{
                puzzle= puzzle + '*'
            }
        })
        return puzzle
    }
    makeGuess = function(guess){
            guess= guess.toLowerCase()
            const isUnique = !this.guessedletter.includes(guess)
            const wrongGuess= !this.words.includes(guess)
        
             if(isUnique){
                 this.guessedletter.push(guess)
             }
        
             if(isUnique && wrongGuess){
                 this.guesslimit --
            }
        
            this.getstatus()
         } 
}

//const game1 = new Hangman('car parts',2)


// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e)=>{
//     if(e.target.readyState===4 && e.target.status===200){
//        let data= JSON.parse(e.target.responseText) 
//        console.log(data)
//        data=data.find((data)=>data.name === 'Leanne Graham')
//        console.log(data.address.street)
//     }else if(e.target.readyState===4){
//         return 'some error occured'
//     }
// })

// request.open('GET','https://jsonplaceholder.typicode.com/users')
// request.send()

// const Hangman = function (words,guesslimit){
//     this.words = words.toLowerCase().split('')
//     this.guesslimit=guesslimit
//     this.guessedletter= []
//     this.status = 'playing'
// }


// Hangman.prototype.getstatus = function () {
//     const finished = this.words.every((letter) => this.guessedletter.includes(letter))

//     if (this.guesslimit <= 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }

// Hangman.prototype.getMsg = function () {
//     if (this.status === 'playing') {
//         return `Guesses left: ${this.guesslimit}`
//     } else if (this.status === 'failed') {
//         return `Nice try! The word was "${this.words.join('')}".`
//     } else {
//         return 'Great work! You guessed the work.'
//     }
// }

// Hangman.prototype.getPuzzle= function(){
//     let puzzle =''

//     this.words.forEach((letter) => {
//         if((this.guessedletter.includes(letter) || letter === ' '))
//         { puzzle =puzzle + letter}
//         else{
//            puzzle= puzzle + '*'
//         }
        
//     })
//     return puzzle
// }

//  Hangman.prototype.makeGuess = function(guess){
//     guess= guess.toLowerCase()
//     const isUnique = !this.guessedletter.includes(guess)
//     const wrongGuess= !this.words.includes(guess)

//      if(isUnique){
//          this.guessedletter.push(guess)
//      }

//      if(isUnique && wrongGuess){
//          this.guesslimit --
//     }

//     this.getstatus()
//  }

// const game1 = new Hangman("cat",2)