$(function(){
    // 获取地址栏信息
    var cId = getSearch("categoryid");
    console.log(cId);
    // 根据地址栏获取到的cId值向后台发送请求，渲染页面
    $.ajax({
      url:" http://127.0.0.1:9090/api/getcategorybyid",
      data:{
        categoryid:cId
      },
      dataType:"json",
      type:"get",
      success:function(info){
        console.log(info);
        var htmlStr = template("aTmp",info);
        $(".product-list-title").html(htmlStr);
      }
    })

// 通过pageid 和cId来渲染列表
    var pageid = 1;
    $.ajax({
      url:"http://127.0.0.1:9090/api/getproductlist",
      data:{
        pageid:pageid,
        categoryid:cId
      },
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr = template("listTmp",info);
        $(".product-list").html(htmlStr); 
      }
    })



})