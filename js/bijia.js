$(function () {
  var productid = getSearch("productid");
  console.log(productid);

  $.ajax({
    url: " http://127.0.0.1:9090/api/getproduct",
    dataType: "json",
    data: {
      productid: productid
    },
    success: function (info) {
      console.log(info);
      var str = template("pTmp", info)
      $("#product-bijia").html(str);
    }
  })


  $.ajax({
    url: " http://127.0.0.1:9090/api/getproductcom",
    dataType: "json",
    data: {
      productid: productid
    },
    success: function (info) {
      console.log(info);
      var htmlStr = template("lTmp", info);
      $(".product-com-list ul").html(htmlStr);
    }

  });

});



// window.addEventListener("load", function() {
//   // 找对象
//   var ul = document.querySelector("#wrapper ul");
//   var lis = ul.children;
//   var liWidth = lis[0].offsetWidth; // 获取宽度

//   // 计算宽度设置给ul
//   ul.style.width = lis.length * liWidth + "px";

//   // 由于计算区域滚动的临界值, 需要进行计算, 要保证 子元素的宽度的准确性
//   // 默认是纵向的滚动, 要横向, 需要配置 scrollX, scrollY
//   new IScroll('#wrapper', {
//     scrollX: true,
//     scrollY: false
//   });
// });