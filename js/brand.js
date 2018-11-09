$(function () {
  var brandtitleid  = getSearch("brandtitleid");
  console.log(brandtitleid);
  
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbrand',
    dataType: "json",
    data:{
      brandtitleid:brandtitleid
    },
    success: function (info) {
      console.log(info);
      var str = template("aTmp",info);
      $(".category-title").html(str)
    }


  })




})