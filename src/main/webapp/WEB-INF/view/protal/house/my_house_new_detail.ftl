<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
<meta content="telephone=no" name="format-detection" />
<title>新房</title>
<link href="${request.contextPath}/static/protal/css/main.css" rel="stylesheet" type="text/css">
<link href="${request.contextPath}/static/protal/css/style.css" rel="stylesheet" type="text/css">
<link href="${request.contextPath}/static/protal/css/shake.css" rel="stylesheet" type="text/css">
<link href="${request.contextPath}/static/protal/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="${request.contextPath}/static/protal/css/animate.min.css" rel="stylesheet" type="text/css">
<link href="${request.contextPath}/static/protal/css/idangerous.swiper.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${request.contextPath}/static/protal/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${request.contextPath}/static/protal/js/layer/layer.js"></script>
<script type="text/javascript" src="${request.contextPath}/static/protal/js/handlebars/handlebars-v4.0.11.js"></script>
<script type="text/javascript" src="${request.contextPath}/static/protal/js/handlebars.js"></script>
<script type="text/javascript" src="${request.contextPath}/static/protal/js/wo.js"></script>
<script type="text/javascript">
function submitBtn(){
	var postData = {
		id: $("#newId").data("value"),
		status: 1
	}
	tip.confirm("确认下架？", function(){
		load.post("/protal/house/new/update", postData, true, function(data){
	        if (data.status == 0) {
	        	tip.msg("取消成功");
	            window.location.href = "/protal/house/new/my";
	        } else {
	            tip.msg("取消失败");
	        }
		});
	});
}
</script>
</head>
<body>
<div class="head">
    <a href="#" class="return"><i class="icon-chevron-left"></i> 返回</a>
   	 新房详情
 	<a href="#" class="search animated fadeInRight" onclick="submitBtn()">下架</a>
</div>
<div class="banner">
    <div class="swipe">
        <ul id="slider">
            <#list houseNew.pictureList as item>
            <li>
                <a href="#"><img src="${item}" height="180" alt="" /></a>
            </li>
            </#list>
        </ul>
        <div id="pagenavi">
        	<#list houseNew.pictureList as item>
            <a href="javascript:void(0);" class=""></a>
            </#list>
        </div>
    </div>
</div>
<h1 class="detail-title" id="newId" data-value="${houseNew.id}">${houseNew.title}</h1>
<h3 class="similar-data">
	<div class="similar_data_detail">
		<p class="gray big">售价</p>
		<p class="red big"><span>${houseNew.price}元/平</span></p>
	</div>
	<div class="similar_data_detail"><p class="gray big">房型</p><p class="red big">${houseNew.countRoom}室${houseNew.countHall}厅${houseNew.countToilet}卫</p></div>
	<div class="similar_data_detail"><p class="gray big">建筑面积</p><p class="red big">${houseNew.acreage}m²</p></div>
 </h3>                   
<ul class="house_description">
    <div class="tag_group">
        <span style="color:rgb(242,161,47);background-color:rgba(242,161,47,0.15);">满五年</span>
        <span style="color:rgb(51,190,133);background-color:rgba(51,190,133,0.15);">随时看房</span>
    </div>
    <li class="short"><span class="gray">单价：</span>${houseNew.price}元/平</li>
    <li class="short"><span class="gray">面积：</span>${houseNew.acreage}m²</li>
    <li class="short"><span class="gray">卧室：</span>${houseNew.countRoom}间</li>
    <li class="short"><span class="gray">卫生间：</span>${houseNew.countHall}间</li>
    <li class="short"><span class="gray">大厅：</span>${houseNew.countToilet}间</li>
    <li class="short"><span class="gray">电梯：</span>独栋电梯</li>
    <li class="short"><span class="gray">用途：</span>${houseNew.purpose}</li>
    <li class="short"><span class="gray">装修：</span>${houseNew.decoration}</li>
    <li class="long "><a><span class="gray">房屋地址：</span>${houseNew.address}</a></li>
    <li class="short"><span class="gray">联系人：</span>${houseNew.linkman}</li>
    <li class="short"><a href="mqqwpa://im/chat?chat_type=wpa&uin=${houseNew.linkqq}&version=1&src_type=web&web_src=oicqzone.com"><span class="gray">联系qq：</span>${houseNew.linkqq}<a></li>
    <li class="long "><a href="tel://${houseNew.linkphone}"><span class="gray">联系电话：</span>${houseNew.linkphoneTo}</a></li>
</ul>
<a class="house_introduce_address" href="javascript:;">
    <h3 class="mod_tit">房源介绍</h3>
    <div class="mod_cont house_intro_mod_cont">
		${houseNew.remarks}
    </div>
</a>
<script type="text/javascript" src="${request.contextPath}/static/protal/js/slide_wap.js"></script>
<script type="text/javascript" src="${request.contextPath}/static/protal/js/common.js"></script>
</body>
</html>