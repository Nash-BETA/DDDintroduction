namespace _03 {
	export class MyProgram implements Use {
		public Main(user: User, request: UserChangeNameRequest): void{
			if (string.IsNullOrEmpty(request.Name)) {
				throw new Error('リクエストのNameがnullまたは空です。');
			}

			user.ChangeName(request.Name);
		}
	}
}