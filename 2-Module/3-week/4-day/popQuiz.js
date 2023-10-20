// function popQuiz(n) {
//     let arr = new Array(n).fill(0);

//   for (let i = 0 ; i < arr.length ; i++) {
//     arr.forEach(el => {
//         console.log("You've got this!")
//     });
//   };

//   let mapped = arr.map(el => el * 0);
//   console.log(mapped);
// };

// popQuiz(10)


function popQuiz3(n) {

    let arr = [2]
    let sum = 0
    for (let i = 0 ; i < n ; i++) {
        arr.filter(el =>{
            if (el % 2 === 0){
                return true
            };
        });
    };

    for (let i = 0; i < n; i++){
        console.log("HERE")
        let idx = 0
        while(idx < n){
            arr.unshift(1)
            idx++
        }
    };
    return sum
}

console.log(popQuiz3(10))
