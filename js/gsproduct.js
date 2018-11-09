$(function () {
  render(0,0 )

  $(".filter").on("click", ".jd", function () {
    $.ajax({
      url: "http://127.0.0.1:9090/api/getgsshop",
      dataType: "json",
      success: function (info) {
        console.log(info);
        var str = template("gsproductTmp", info)
        $("#shop ul").html(str)
      }
    })
    $("#shop").toggle();

  })


  $(".filter").on("click", ".north", function () {
    $.ajax({
      url: "http://127.0.0.1:9090/api/getgsshoparea",
      dataType: "json",
      success: function (info) {
        console.log(info);
        var str = template("gsproductTpl", info)
        $("#shop ul").html(str);
      }
    })

    $("#shop").toggle();
    $($this).next("div a").html($("this").val())
  });



  var shopid;
  var areaid;
  $("#shop").on("click", "a", function () {

    shopid = $(this).data("shopid");
    areaid = $(this).data("areaid");
    console.log(shopid,areaid);
    render(shopid, areaid);
    $("#shop").hide();
  })





  function render(shopid, areaid) {
    $.ajax({
      url: "http://127.0.0.1:9090/api/getgsproduct",
      data: {
        shopid: shopid || 0,
        areaid: areaid || 0
      },
      dataType: "json",
      success: function (info) {
        console.log(info);
        var htmlStr = template("gsListTmp", info);
        $("#container").html(htmlStr);
      }



    })

  }
})