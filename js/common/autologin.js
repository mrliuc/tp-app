function checkLogin() {
	if(mui.os.plus) {

		mui.plusReady(function() {
			var user = Util.getData('user');

			if(!user) {
				return;
			}
			Util.ajaxWithLoading('/user/LoginWithToken', {
				Id: user.Id,
				Token: user.Token
			}, function(result) {
				if(!result.isSuccess) {
					return Util.setData('user', '');
				}

				Util.setData('user', result.data);
				mui.toast('登录成功')
			},'正在登录...');
		});


	} else {
		var user = Util.getData('user');
		if(!user) {

			return;
		}

		console.log('userId=======' + user.Id)
		Util.ajaxWithLoading('/user/LoginWithToken', {
			Id: user.Id,
			Token: user.Token
		}, function(result) {
			if(!result.isSuccess) {
				return Util.setData('user', '');
			}
			//			console.log('11111111111-------------'+JSON.stringify(result.data))
			Util.setData('user', result.data);
			
			mui.toast('登录成功')

		},'正在登录...');
	}
};
checkLogin();