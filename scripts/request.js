
const getPuzzle = async (wordcount) => {

    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordcount}`,{})
    
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('some error occred')
        }
    }

// const challenge = () => {
//     return fetch(`http://ipinfo.io/json?token=7522601dfd1f74`,{}).then((response)=>{
//         if(response.status === 200){
//             return response.json()
//         }else{
//             throw new Error('some error occred')
//         }})}


// const getpuzzle = (callback)=>{

// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e)=>{
//     if(e.target.readyState===4 && e.target.status===200){
//        let data= JSON.parse(e.target.responseText) 
//        console.log(data)
//        callback(undefined,data.puzzle)//callback is not a reserved keyword
//     }else if(e.target.readyState===4){
//         callback('error occured',undefined)
//         return 'some error occured'
//     }
// })
// request.open('GET','http://puzzle.mead.io/puzzle?wordCount=2')
// request.send()
// }

// const p = new Promise((resolve,reject)=>{
//     const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e)=>{
//     if(e.target.readyState===4 && e.target.status===200){
//        let data= JSON.parse(e.target.responseText) 
//        resolve(data.puzzle)
//     }else if(e.target.readyState===4){
//         reject('error occured',undefined)
//     }
// })
// request.open('GET','http://puzzle.mead.io/puzzle?wordCount=2')
// request.send()

// })


// const getpuzzlesync = ()=>{

//     const request = new XMLHttpRequest()
//     request.open('GET','http://puzzle.mead.io/puzzle?wordCount=2',false)
//     request.send()
//         if(request.readyState===4 && request.status===200){
//            let data= JSON.parse(request.responseText) 
//            return data.puzzle
//         }else if(request.readyState===4){
//             throw new Error('error occured')
//         }
//     }
// const getusers = (callback)=>{

// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e)=>{
//     if(e.target.readyState===4 && e.target.status===200){
//        let data= JSON.parse(e.target.responseText) 
//        console.log(data)
//        data=data.find((data)=>data.name === 'Leanne Graham')
//        callback(undefined,data.address.street)
//     }else if(e.target.readyState===4){
//         callback('error occured',undefined)
//         return 'some error occured'
//     }
// })
// request.open('GET','https://jsonplaceholder.typicode.com/users')
// request.send()
// }