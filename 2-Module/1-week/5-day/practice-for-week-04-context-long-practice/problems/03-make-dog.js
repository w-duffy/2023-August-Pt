// Your code here

class Dog {
	constructor(name){
		this.name = name
	}

	static makeJet(){
		console.log("THIS", this)
		return new this("Jet")
	}

	speak(word){
		return `${this.name} says ${word}`
	}

	changeName(nameArg){
		this.name = nameArg;
		return nameArg

	}

}




/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
