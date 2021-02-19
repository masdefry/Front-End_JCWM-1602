// STRING WAVES
// Ex. ryan ---> Ryan
//               rYan
//               ryAn
//               ryaN

function stringWaves(str){
    let output = ''

    for(let i=0; i < str.length; i++){ 
        for(let j=0; j < str.length; j++){
            if(i == j){ 
                output += str[j].toUpperCase()
            }else{
                output += str[j]
            }
        }

        output += '\n' // <br> kalo di html
    }

    console.log(output)
}

// i=0; j=0; 0=0     -> R
//      j=1; 0!=1    -> Ry
//      j=2; 0!=2    -> Rya   

stringWaves('ryan')


// GENERATE RANGE

function generateRange(min, max, step){
    let result = []

    for(let i=min; i <= max; i+=step){
        result.push(i)
    }

    console.log(result)
}

generateRange(2, 10, 2) // Output ---> [2, 4, 6, 8, 10]
generateRange(1, 10, 3) // Output ---> [1, 4, 7, 10]
generateRange(1, 5, 9) // Output ---> [1]



// // PATTERN 1
// 1 2 3
// 2 4 6
// 3 6 9

// // PATTERN 2
//     *
//    ***
//   *****

// // PATTERN 3
//      *
//     **
//    ***
//   ****