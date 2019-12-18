var article = {
    // 查询展示分类列表
    category_search: function (options) {
        $.ajax({
            url: SEARCH,
            success: function (res) {
                options.success(res)
            }
        })
    },
    // 增加分类
    category_add: function (options) {
        $.ajax({
            type: "POST",
            url: CATEGORY_ADD,
            data: { //$("form").serialize(),
                name: options.data.nameval,
                slug: options.data.slugval,
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    // 修改分类
    category_edit: function (options) {
        $.ajax({
            type: "POST",
            url: CATEGORY_EDIT,
            data: options.data.name,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    // 删除分类
    category_delete: function (options) {
        $.ajax({
            type: "POST",
            url: CATEGORY_DELETE,
            data: {
                id: options.data.id,
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    }
}