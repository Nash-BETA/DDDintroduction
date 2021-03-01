import { User_03 } from './User';
import { UserChangeNameRequest_03 } from './UserChangeNameRequest';
export namespace MyProgram_03 {
	export class MyProgram {
		public Main(user: User_03.User, request: UserChangeNameRequest_03.UserChangeNameRequest): void{
			if (request.name == null) {
				throw new Error('リクエストのNameがnullまたは空です。');
			}
			user.ChangeName(request.name);
		}
	}
}