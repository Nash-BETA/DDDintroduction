

namespace D3_c2_User {
	export class User {
		private name: string;

		constructor(name: string) {
			this.ChangeName(name);
		}

		ChangeName(name: string): void  {
			if (name == null) {
				throw new Error('nameがnull');
			}
			if (name.length < 3) {
				throw new Error('ユーザ名は３文字以上です。');
			}
			this.name = name;
		}

		getName() {
			return this.name;
		}
	}
}
let b = new D3_c2_User.User('tanaka');
console.log(b.getName());