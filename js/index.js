$(function () {
  // 通过ajax向后台请求数据导航内的数据
  $.ajax({
    url: "http://127.0.0.1:9090/api/getindexmenu",
    dataType: "json",
    type: "get",
    success: function (info) {
      // console.log(info);      
      var htmlStr = template("navTmp", info);
      $("#mm_nav").html(htmlStr);
      // 
      $("#mm_nav ul").children().slice(8, 12).addClass("active"); 

    }

  })

  // 通过ajax向后台请求数据折扣商品

  $.ajax({
    url: "http://127.0.0.1:9090/api/getmoneyctrl",
    type: "get",
    dataType: "json",
    success: function (info) {
      console.log(info);

      var htmlStr = template("listTmp", info);
      $("#mm_content_list").html(htmlStr);
    }
  })


  // 导航中的a注册点击事件使用事件委托
  $("#mm_nav").on("click", "a", function () {
    // 获取保存在a标签内的标题名
    var title = $(this).data("title");
    console.log(title);
    if (title == "#") {
      $(this).parent().nextAll().toggleClass("active");
    }
  })
});