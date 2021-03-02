namespace E2 {
    export class FullName {
        private readonly first_name: string;
        private readonly family_name: string;

        constructor(first_name: string, family_name: string) {
            this.first_name = first_name;
            this.family_name = family_name;
        }

        equals(other: FullName): boolean {
            if (this == other) {
                return true;
            }

            return (
                this.first_name === other.first_name && this.family_name === other.family_name
            );
        }

        get FirstName() { return this.first_name }
        get FamilyName() { return this.family_name }
    }

    export class User{
        private readonly id:UserId;
        private fullname: FullName;
        constructor(fullname: FullName, id?:UserId){
            this.id = id ? id : new UserId('5');
            this.fullname = fullname;
        }

        //privateなので読み取る用のget
        get Fullname(){return this.fullname}


        //名前を変えるメソッド
        ChangeName(newName: FullName){
            this.fullname = newName;
        }
    }

    export class UserId{
        private value: string;

        constructor(id:string){
            this.value = id;
        }

        get Value() { return this.value}

        equals(obj : object): boolean {
            if (obj == null) {
                return true;
            }
            if (obj == this) {
                return true;
            }
            if (obj.constructor.toString() != this.constructor.toString()){
                return false;
            }
            return true;
        }

        //ハッシュ化できないのでひとまず適当な数字を返す
        GetHashCode(): number {
            return (this.Value != null ?  3423 : 0);
        }
    }


}
