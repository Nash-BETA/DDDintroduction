import { MyProgram_03 } from './MyProgram';
import { User_03 } from './User';
import { UserChangeNameRequest_03 } from './UserChangeNameRequest';
class Program {
	static Main(): void {
		var program = new MyProgram_03.MyProgram();
		var user = new User_03.User("test-user");
		var request = new UserChangeNameRequest_03.UserChangeNameRequest(null);
		program.Main(user, request);
	}
}

Program.Main();