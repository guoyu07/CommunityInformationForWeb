// JavaScript Document
//动态判断手机分辨率适配
/*(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 16 * (clientWidth / 320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);*/

$(document).ready(function(){
	<!--控制字数，超出后显示省略号-->
	jQuery(function(){
		//使用id选择器;例如:tab对象->tr->td对象.
		$(".post_m p,.post_m_l p").each(function(i){
			//获取td当前对象的文本,如果长度大于25;
			if($(this).text().length>40){
				//给td设置title属性,并且设置td的完整值.给title属性.
				$(this).attr("title",$(this).text());
				//获取td的值,进行截取。赋值给text变量保存.
				var text=$(this).text().substring(0,40)+"...";
				//重新为td赋值;
				$(this).text(text);
			}
		});
	});
	//返回
	$(".return,.home").click(function(){
		history.back(-1);
	});
	//弹出子菜单
	$(".navbtn").click(function(){
		$(".navcenter,.reveal-modal-bg").fadeIn();
	});
	//分享弹窗
	$(".fx_bth").click(function(){
		$(".modal_img,.reveal-modal-bg").fadeIn(500);
	});
	$(".reveal-modal-bg,.closed").click(function(){
		$(".modal_img,.reveal-modal-bg").fadeOut(500);
		$(".navcenter").fadeOut(500);
	});
});

var load = {
	ajax: function (options){
		var data = options.data ? options.data : {"t": new Date().getTime()};
		var type = options.type ? options.type : 'GET';//请求类型
	    var dataType = options.dataType ? options.dataType : 'json';//接收数据类型
	    var contentType = options.contentType ? options.contentType : 'application/x-www-form-urlencoded';//发送数据类型
	    var async = options.async ? options.async : true;//异步请求
	    var cache = options.cache ? options.cache : false;//浏览器历史缓存
	    var alone = options.alone ? options.alone : false;
	    var success = function (data) {
	    	tip.closeAll();
	    	options.success(data);
	    };
	    var error = options.error ? options.error : function (data) {
	    	tip.closeAll();
            if(data.status == 404){
                tip.msg('请求失败，请求未找到');
            }else if(data.status == 503){
                tip.msg('请求失败，服务器内部错误');
            }else {
                tip.msg('请求失败,网络连接超时');
            }
	    };
	    var beforeSend = options.beforeSend ? options.beforeSend : function (data){
	    	if(alone){
	    		tip.loading();
	    	}
	    };
	    $.ajax({
	        url: options.url,
	        data: data,
	        type: type,
	        dataType: dataType,
	        contentType: contentType,
	        async: async,
	        cache: cache,
	        success: success,
	        error: error,
	        beforeSend: beforeSend,
	        complete: options.complete,
	        jsonpCallback: 'jsonp' + (new Date()).valueOf().toString().substr(-4)
	    });
	},
	form: function(form, success){
    	this.ajax({
    		url: $(form).attr('action'),
    		data: $(form).serialize(),
    		success: success,
    		alone: true,
    		async: false
    	});
	},
	post: function(url, data, alone, success){
    	this.ajax({
    		url: url,
    		type: 'POST',
    		data: data,
    		success: success,
    		alone: alone
    	});
	},
	postJson: function(url, data, alone, success){
    	this.ajax({
    		url: url,
    		type: 'POST',
    		data: data,
    		success: success,
    		alone: alone,
	        contentType: 'application/json'
    	});
	},
	get: function(url, alone, success){
    	this.ajax({
    		url: url,
    		success: success,
    		alone: alone
    	});
	},
	jsonpGet: function(url, alone, success){
    	this.ajax({
    		url: url,
    		success: success,
    		alone: alone,
    		type: 'get',
    		dataType: 'jsonp'
    	});
	},
	jsonpPost: function(url, data, alone, success){
    	this.ajax({
    		url: url,
    		type: 'POST',
    		data: data,
    		success: success,
    		alone: alone,
    		dataType: 'jsonp'
    	});
	},
	jsonpPostJson: function(url, data, alone, success){
    	this.ajax({
    		url: url,
    		type: 'POST',
    		data: data,
    		success: success,
    		alone: alone,
	        contentType: 'application/json',
    		dataType: 'jsonp'
    	});
	}
}

var tip = {
	msg: function(message){
	  layer.open({
	    content: message,
	    skin: 'msg',
	    time: 2 
	  });
	},
	alert: function(message){
	  layer.open({
	    content: message,
	    btn: '确定'
	  });
	},
	loading: function(){
	  layer.open({
	    type: 2,
	    content: '加载中'
	  });
	},
	closeAll: function(){
		layer.closeAll();
	},
	confirm: function(content, yes){
	  layer.open({
	    content: content,
	    btn: ['确定', '取消'],
	    yes: function(index){
	      yes();
	      layer.close(index);
	    }
	  });
	},
	confirmEnd: function(content, yes){
	  layer.open({
	    content: content,
	    btn: ['确定', '取消'],
	    skin: 'footer',
	    yes: function(index){
	      yes();
	      layer.close(index);
	    }
	  });
	}
}

var validate = {
	isEmpty:function(obj) {
		if (obj == null) {
			return true;
		} else if ( typeof (obj) == "undefined") {
			return true;
		}else if(obj == "undefined"){
			return true;
		} else if (obj == "") {
			return true;
		} else if ($.trim(obj) == "") {
			return true;
		} else if (obj.length == 0) {
			return true;
		} else {
			return false;
		}
	},
	notNull: function(value){
		if (!value) return true;
	},
	alNum: function(value){
		var tel = /^[a-zA-Z0-9]+$/;
    	return !tel.test(value);//字母数字
	}, 
	cellPhone: function(value){
   	    var tel = /^(1\d{10})$/;
    	return !(value.length == 11 && tel.test(value));// 手机号码验证  
	},
	telePhone: function(value){
	    var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
   	    return !tel.test(value);// 电话号码验证   
	},
	email: function(value){
		var tel = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		return !tel.test(value);// 邮箱验证 
	},
	zipCode: function(value){
	    var tel = /^[0-9]{6}$/;
    	return !tel.test(value);// 邮政编码验证
	},
	chCharacter: function(value){
	    var tel = /^[\u4e00-\u9fa5]+$/;
    	return !tel.test(value);// 汉字
	},
	qqNum: function(value){
    	var tel = /^[1-9][0-9]{4,}$/;
    	return !tel.test(value);// QQ
	},
	userName: function(value){
		var tel = /^[a-zA-Z][a-zA-Z0-9_]+$/;
    	return !tel.test(value);// 用户名
	},
	idCard: function(value){
		var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
		var tel = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
		var flag = true;
		if(!tel.test(value)){
			flag = false;
		}else if(!city[value.substr(0,2)]){
			flag = false;
		}else{
	        value = value.split('');
	        var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
	        var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
	        var sum = 0;
	        var ai = 0;
	        var wi = 0;
	        for (var i = 0; i < 17; i++){
	            ai = value[i];
	            wi = factor[i];
	            sum += ai * wi;
	        }
	        var last = parity[sum % 11];
	        if(parity[sum % 11] != value[17]){
	            flag =false;
	        }
		}
	    return !flag;
	}
}