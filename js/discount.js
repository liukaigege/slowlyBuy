$(function () {
  // 获取地址栏传递过来的 productId
  var productId = getSearch("productid");
  // 根据productId发送请求，渲染页面
  $.ajax({
    url: "http://127.0.0.1:9090/api/getdiscountproduct",
    data: {
      productid: productId
    },
    dataType: "json",
    type: "get",
    success: function (info) {
      console.log(info);

      var htmlStr = template("discountTmp", info);
      console.log(htmlStr);

      $(".discount_content").html(htmlStr);
    }
  })

})