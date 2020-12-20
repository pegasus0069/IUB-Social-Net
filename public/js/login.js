function doLogin(form) {
			form.submit.setAttribute("disabled", "disabled");
			form.submit.innerHTML = "<span>Loading...</span>";

			var ajax = new XMLHttpRequest();
			ajax.open("POST", "/login", true);

			ajax.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					form.submit.removeAttribute("disabled");
					form.submit.innerHTML = "<span>Login</span>";

					var response = JSON.parse(this.responseText);

					if (response.status == "success") {
						var accessToken = response.accessToken;
						localStorage.setItem("accessToken", accessToken);
						if (response.profileImage == "") {
							window.location.href = "/updateProfile";
						} else {
							window.location.href = "/";
						}
					} else {
						alert(response.message);
					}
				}
			};

			ajax.send(new FormData(form));
			return false;
		}