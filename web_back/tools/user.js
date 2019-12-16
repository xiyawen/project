var user = {
    login: function (options) {
        $.ajax({
            type: "POST",
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password,
            },
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    logout: function (options) {
        $.ajax({
            type: "POST",
            url: LOGOUT,
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }

            }
        })
    }
}