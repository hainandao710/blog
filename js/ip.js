

$(document).ready(function(){
  $.ajax({
    type : "GET",
    url : "http://apis.baidu.com/apistore/iplookupservice/iplookup";
    headers : { apikey : 4e7ec4ca4892e4fda4a421466dc9ef39 },
    data : " ip = 117.89.35.58 ",
    success : function (data){
        $(".idaddress").html(data+"<p>ILOVEYOU!</>");
    }
  });
}
