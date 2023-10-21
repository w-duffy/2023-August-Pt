
class Node {
    constructor(step){
        this.step = step;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.start = null;
        this.length = 0;
    }

    addToStart(node){
        //If there is no start, add our node as the start
        if(!this.start){
            this.start = node;
        } else{
            let oldStart = this.start;
            this.start = node;
            this.start.next = oldStart;
        }
        this.length++;
        // console.log(node)
    }

    printSteps(){
        let currStep = this.start;
        while(currStep){
            console.log(currStep.step); //The thing we wanted to do
            currStep = currStep.next
        }
    }
}


let pbj_recipe = new LinkedList();

let step1 = new Node("Toasting Bread");
let step2 = new Node("Add Peanut Butter");
let step3 = new Node("Add Jelly");
let step4 = new Node("Enjoy!")
// console.log(step1)
pbj_recipe.addToStart(step4);
pbj_recipe.addToStart(step3);
pbj_recipe.addToStart(step2);
pbj_recipe.addToStart(step1);
// console.log(pbj_recipe)
pbj_recipe.printSteps();










// const pbj_recipe = {
//     step: "Toasting Bread",
//     next: {
//         step: "Add Peanut Butter",
//         next: {
//             step: "Add Jelly",
//             next: {
//                 step: "Enjoy!",
//                 next: null
//             }
//         }
//     }
// }


// /*
// To iterate over all the nested objects, we will need a pointer. Our pointer will slowly be moving
// */

// let action = pbj_recipe;

// while(action){
//     console.log(action.step) // Do the thing, the thing we want
//     action = action.next;
// }
