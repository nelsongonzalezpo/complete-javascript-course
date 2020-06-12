// const primera = () => { 
//     console.log('First')
// }

// const segunda = () => {
//     setTimeout(() => {
//         console.log('second')
//     }, 2000);
// }

// const texto = document.getElementById('h1')

// proc(texto, () => { 
//     console.log('nello')
// })


// primera();
// console.log('mientras')
// segunda();

//Old Way

// function getRecipe() { 

//     setTimeout(() => {

//         const rId = [1, 2, 3, 4, 5]
//         console.log(rId)

//         setTimeout((id) => {

//             const r = { 'titlle': 'Receta', 'desc': 'Receta pasta' }
//             console.log(id + " " + r.titlle)

//             setTimeout((tit) => {

//                 console.log(tit)
                
//             }, 2000, r.titlle);
            
//         }, 2000, rId[2]);
        
//     }, 2000);

// }

// getRecipe()

// From CallBack to Promises

// const getId = new Promise((res, rej) => {

//     setTimeout(() => {
//         res([1, 2, 3, 4, 5])
//         // rej('no data')        
//     }, 2000);
// })

// const getR = recId => { 
//     return new Promise((res, rej) => { 
//         setTimeout(id => {
//             const recipe = { 'title': 'Receta', 'desc': 'Receta pasta' }
//             res(id + " " + recipe.desc)
//         }, 2000, recId);
//     })
// }


// const getRelated = title => { 
//     return new Promise((res, rej) => { 
//         setTimeout(tit => {

//             const recipe = { 'title': 'Receta', 'desc': 'Receta pasta' }
//             res(recipe.title)            
//         }, 2000);
//     })

// }



// getId.then(id => {

//     console.log(id)
//     return getR(id[1])
// })
//     .then(recipe => { 
//         console.log(recipe)
//        return getRelated(recipe.title)
//     })
//     .then(recipe => { 
//         console.log(recipe)
//     })
//     .catch(error => {
//         console.log(error)
// })

//From promises to Async Await

// const getId = new Promise((res, rej) => {

//     setTimeout(() => {
//         res([1, 2, 3, 4, 5])
//         // rej('no data')        
//     }, 2000);
// })

// const getR = recId => { 
//     return new Promise((res, rej) => { 
//         setTimeout(id => {
//             const recipe = { 'title': 'Receta', 'desc': 'Receta pasta' }
//             res(id + " " + recipe.desc)
//         }, 2000, recId);
//     })
// }


// const getRelated = title => { 
//     return new Promise((res, rej) => { 
//         setTimeout(tit => {

//             const recipe = { 'title': 'Receta', 'desc': 'Receta pasta' }
//             res(recipe.title)            
//         }, 2000);
//     })

// }

// async function getRecipeAW() { 

//     const nueva = await getId
//     // console.log(nueva)

//     return nueva
    
// }

// getRecipeAW().then(result => {console.log(result)})

//  Ajax JS Fetch

// fetch('http://192.168.15.154:3010/getAllStates') 
//     .then(result => { 
//         // console.log(result)
//         return result.json();
//     })
//     .then(data => { 
//         console.log(data)

//         data.forEach(element => {

//             console.log(element.name + " " + element._id)
            
//         });

//     })
//     .catch(error => { 
//         console.log(error)
//     })


// // Async JS
// async function getStates() {

//     try {

//         let resultado = await fetch('http://192.168.15.154:3010/getAllStates')
//         // console.log(resultado)
//         let data = await resultado.json()

//         data.forEach(element => {
//             console.log(element._id)
//         });


//         console.log(data)
        
//     } catch (error) {

//         alert(error)
        
//     }

   
       


// }

// getStates()