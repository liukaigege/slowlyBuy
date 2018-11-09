$(function () {
  // 一进入页面，渲染内容部分，通过ajax
  $.ajax({
    url: "http://127.0.0.1:9090/api/getcategorytitle",
    dataType: "json",
    type: "get",
    success: function (info) {
      console.log(info);
      var htmlStr = template("categoryTmp", info)
      $(".row").html(htmlStr);
      $(".category-content").hide();
    }
  })


  // 给a注册点击事件
  $("#category").on("click", ".categoryA", function () {
    // 获取此标签上的自定义属性id
    var aId = $(this).data("id");
    console.log(aId);
    // 根据获取到的id值渲染下级菜单
    $.ajax({
      url: "http://127.0.0.1:9090/api/getcategory",
      data: {
        titleid: aId
      },
      dataType: "json",
      type: "get",
      success: function (info) {
        console.log(info);
        var htmlStr = template("categoryTpl", info)
        $(".category-content").html(htmlStr);
      }
    })
    $(this).next().toggle().parents().siblings().find("ul").hide();
  })

})