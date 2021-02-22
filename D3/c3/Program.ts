
namespace _03 {
	export class Program {
		static Main(string[] args): void {
			var program = new MyProgram();
			var user = new User("test-user");
			var request = new _03.UserChangeNameRequest { Name = null };
			program.Main(user, request);
		}
	}
}