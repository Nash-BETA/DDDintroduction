export namespace User_03 {
    export class User {
        public name: string;

        constructor(name: string) {
            this.name = this.ChangeName(name);
        }

        ChangeName(name: string):string {
            if (name == null) {
                throw new Error('nameがnull');
            }
            if (name.length < 3) {
                throw new Error('ユーザ名は３文字以上です。');
            }
            return name;
        }
    }
}