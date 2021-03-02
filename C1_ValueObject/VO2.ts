
class FullName{

	private readonly first_name:string;
	private readonly family_name:string;

	constructor(first_name:string, family_name:string){
		this.first_name  = first_name;
		this.family_name = family_name;
	}

	get FirstName(){return this.first_name}
	get FamilyName(){return this.family_name}
}


let fullname1 = new FullName('taro','tanaka');
console.log(fullname1.FamilyName);

let fullname2 = new FullName('john', 'smith');
console.log(fullname2.FamilyName);
