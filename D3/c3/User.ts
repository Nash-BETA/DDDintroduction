namespace _03 {

    export class User {
        private name: string;

        public User(name: string) {
            this.ChangeName(name);
        }

        public ChangeName(name: string):void {
            if (name == null) {
                throw new Error('nameがnull');
            }
            if (name.length < 3) {
                throw new Error('ユーザ名は３文字以上です。');
            }
            this.name = name;
    }
}