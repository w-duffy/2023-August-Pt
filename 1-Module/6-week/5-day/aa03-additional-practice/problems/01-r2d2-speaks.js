/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
    // Your code here

    //bc
    if(!code.length) return
    //rs
    let shifted = code.shift()

    if(shifted === 0){
        console.log("beep")
        setTimeout(() =>{            //rc
            r2d2Speaks(code)
        }, 400)
    } else{
        console.log("boop")
        setTimeout(() =>{           //rc

            r2d2Speaks(code)
        }, 800)
    }
}

// let code = [0, 1, 1, 0];
// r2d2Speaks(code);









// function r2d2Speaks(code, countDownToSpoiler = 4) {
//     // Your code here


//     if(countDownToSpoiler === 0){
//         console.log("SPOILER: ")
//         setTimeout(() =>{
//             console.log("Luke, I am your father")
//         }, 3000)
//     } else{
//         console.log(`Spoiler coming in ${countDownToSpoiler}`)
//     }

//     if(!code.length) return;
//     let shifted = code.shift()
//     if(shifted){
//         console.log("beep")
//         countDownToSpoiler--
//         setTimeout(() =>{
//             r2d2Speaks(code, countDownToSpoiler)
//         }, 400)

//     } else{
//         countDownToSpoiler--
//         console.log("boop")
//         setTimeout(() =>{
//             r2d2Speaks(code, countDownToSpoiler)
//         }, 800)
//     }

// }

// let code = [0, 1, 1, 0];
// r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
