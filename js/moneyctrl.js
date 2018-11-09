$(function () {
  // 给分类页注册点击事件，使用事件委托
  $("#mm_content_list").on("click", "a", function () {
    // 点击获取该元素中的id
    var pId = $(this).data("id");
    // console.log(pId);
    location.href = "cDiscount.html?productid=" + pId;
  });

  // 通过ajax向后台请求数据折扣商品
  render(0);

  function render(index) {
    $.ajax({
      url: "http://127.0.0.1:9090/api/getmoneyctrl",
      type: "get",
      dataType: "json",
      data: {
        pageid: index
      },
      success: function (info) {
        console.log(info);

        var htmlStr = template("listTmp", info);
        $("#mm_content_list").html(htmlStr);

        // 制作分页
        // 计算最大分页
        var maxPage = Math.ceil(info.totalCount / info.pagesize);
        // console.log(maxPage);
        //创建一个空数组
        info.arr = [];
        info.arr.length = maxPage;
        info.index = index;
        var str = template("currengeTmp", info);
        $('#sel').html(str);
        $('#sel').val(index);
      }

    })

  }
  // 创建select事件

  $("#sel").on("change", function () {
    // 将当前页数获取
    var id = $(this).val();
    render(id);
  })

  $('.next_btn').on("click", function () {
    var btn1 = $('#sel').val();
    console.log(btn1)
    var maxLength = $("#sel option").data('value');
    console.log(maxLength);
    btn1++;
    render(btn1);
    if (btn1 === maxLength - 1) {
      $(this).attr('disabled', true);
    }

  });


  $('.prv_btn').on("click", function () {
    var btn1 = $('#sel').val();
    console.log(btn1)
    var maxLength = $("#sel option").data('value');
    console.log(maxLength);
    if (btn1 <= maxLength - 1 || btn1 > -1) {
      btn1--;
      render(btn1);
    } else
    if (btn1 === 0) {
      $(this).attr('disabled', true);
    }

  })

})