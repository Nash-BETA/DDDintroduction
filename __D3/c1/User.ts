
namespace D3_c1_User {
	export class User {
		private name: string;
		constructor(name: string) {
			if (name == null){
				throw new Error('nameがnull');
			}
			if (name.length < 3) {
				throw new Error('ユーザ名は３文字以上です。');
			}
			this.name = name;
		}
		getName(){
			return this.name;
		}
	}
}

let a = new D3_c1_User.User('tanaka');
console.log(a.getName());