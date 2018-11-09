$(function () {
  $.ajax({
    url: " http://127.0.0.1:9090/api/getbaicaijiatitle",
    dataType: "json",
    success: function (info) {
      console.log(info);
      var str = template("bcjTmp", info)
      $(".tabs").html(str);
    }
  })

  render(0);


  function render(titleid) {
    $.ajax({
      url: " http://127.0.0.1:9090/api/getbaicaijiaproduct",
      dataType: "json",
      data: {
        titleid: titleid
      },
      success: function (info) {
        console.log(info);
        var htmlStr = template("bcjTpl", info);
        $("#tapsB").html(htmlStr);
      }
    })
  }

  // 注册点击事件，获取自定义id，通过id向后台发送请求获取数据并渲染详情页
  $(".tabs").on("click", ".tabA", function () {
    var titleid = $(this).data("id");
    console.log(titleid);
    render(titleid)
  })

  new IScroll('#wrapper', {
    scrollX: true,
    scrollY: false
  });
});