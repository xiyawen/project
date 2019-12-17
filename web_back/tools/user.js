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
    },
    // 用户信息
    getUser: function (options) {
        $.ajax({
            url: GETUSER,
            success: function (res) {
                console.log(res);
                options.success(res);
            }
        })
    },
    // 文章数量
    article_count: function (options) {
        $.ajax({
            url: COUNT,
            success: function (res) {
                // console.log(res);
                options.success(res)
            }
        })
    },
    // 评论数量
    comment_count: function (options) {
        $.ajax({
            url: "http://localhost:8000/admin/comment_count",
            success: function (res) {
                console.log(res);
                options.success(res)
            }
        })
    },
    // 获取用户信息
    userinfo_get: function (options) {
        $.ajax({
            url: USERINFO_GET,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res)
                }
            }
        })
    },
    // 用户信息编辑
    userinfo_edit: function (options) {
        // 声明formDate
        var fd = new FormData($("form")[0]);
        $.ajax({
            type: "POST",
            url: "http://localhost:8000/admin/userinfo_edit",
            data: fd,
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    }
}