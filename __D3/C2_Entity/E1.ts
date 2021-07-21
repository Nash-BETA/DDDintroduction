namespace E1 {
    export class FullName {
        private readonly first_name: string;
        private readonly family_name: string;

        constructor(first_name: string, family_name: string) {
            this.first_name = first_name;
            this.family_name = family_name;
        }

        get FirstName() { return this.first_name }
        get FamilyName() { return this.family_name }
    }
}

class User{
    private fullname:E1.FullName;
    constructor(fullname:E1.FullName){
        this.fullname = fullname;
    }

    //privateなので読み取る用のget
    get Fullname(){return this.fullname}

    //名前を変えるメソッド
    ChangeName(newName:E1.FullName){
        this.fullname = newName;
    }
}


const test = new User(new E1.FullName('test','test'));
console.log(test.Fullname);
test.ChangeName(new E1.FullName('test2', 'test2'));
console.log(test.Fullname);
