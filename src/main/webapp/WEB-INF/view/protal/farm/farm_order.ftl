<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
<meta content="telephone=no" name="format-detection" />
<title>我的订单</title>
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
<script>
$(function(){
	loadData();
})

function loadData(){
	load.post("/protal/farm/order/list", {}, false, function(data) {
		if(data){
			handlebars.loadTemplate("#farm-list", "#list-template", data);
		}
	});
}
</script>
</head>
<body>
<div class="head">
    <a href="/protal/user/user" class="return"><i class="icon-chevron-left"></i> 返回</a>
   	 我的订单
</div>
<div class="interest_list">
    <ul id="farm-list">
    </ul>
</div>
<script id="list-template" type="text/x-handlebars-template">
	{{#each this}}
        <li class="animated bounceInLeft">
            <a href="/protal/farm/order/detail/{{id}}">
                <div class="list_r">
                    <p><span>{{farmName}}</span><span class="color_y">状态：{{statusValue}}</span></p>
                    <p>下单时间：{{createTime}}</p>
                    <i class=" icon-angle-right"></i>
                </div>
            </a>
        </li>
	{{/each}}
</script>
</body>
</html>