function doRegister(form) {
			form.submit.setAttribute("disabled", "disabled");
			form.submit.innerHTML = "<span>Loading...</span>";

			var ajax = new XMLHttpRequest();
			ajax.open("POST", "/signup", true);

			ajax.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					form.submit.removeAttribute("disabled");
					form.submit.innerHTML = "<span>Register</span>";

					var response = JSON.parse(this.responseText);
					alert(response.message);

					if (response.status == "success") {
						window.location.href = "/login";
					}
				}
			};

			ajax.send(new FormData(form));
			return false;
		}