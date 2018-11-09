$(function () {
  var id = getSearch("couponid");
  console.log(id);
  var name = getSearch("name");
  console.log(name);

  $(".mm_header h3").html(name+"优惠券");
  
  $.ajax({
    url: " http://127.0.0.1:9090/api/getcouponproduct",
    data:{
      couponid:id,
    },
    dataType: "json",
    success: function (info) {
      // info.name = name;
      console.log(info);
      
      var str = template("Tmp", info)
      $(".coupon-list ul").html(str);
      
    }
  })


})