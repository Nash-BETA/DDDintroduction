export namespace User_03 {
    export class User {
        public name: string;

        constructor(name: string) {
            this.name = this.ChangeName(name);
        }

        ChangeName(name: string):string {
            try {
                if (name == null) {
                    //トランザクション内ではないのでthrowはいらない
                    throw 'nameがnull';
                }else{
                    if (name.length < 3) {
                        //トランザクション内ではないのでthrowはいらない
                        throw 'ユーザ名は３文字以上です。';
                    }

                }
            }catch (e) {
                console.log(e);
            }
            return name;
        }
    }
}