
/*===========================================Gorgeous split-line==============================================*/
$(function(){
	var session ="true";
	var rid="";
	var globalrjson="";//post json data to backstage server
	/*
	 * To obtain random rid
	 */
	getIdforradom=function(){
		var myDate=new Date();
		rid=myDate.getSeconds().toString()+myDate.getMilliseconds().toString();
	},
	/*
	 * Delete Page elements According to rid 
	 */
	delParamPChild=function(rid){
		$('#add'+rid).remove();
	},
	/**
	 * 点击增加参数按钮
	 */
	$('#addparam').click(function(){
		getIdforradom();
		var html="<tr id='add"+rid+"'>" +
		"<td class='title'><div class='form'><div class='fields'><div class='field field-first'><div class='typeinput'><input id='paramlistname"+rid+"' name='paramlistname"+rid+"'  type='text' value='' class='small'/></div></div></div></div></td>"+
		"<td ><div class='form'><div class='fields'><div class='field field-first'><div class='typeinput'><input id='paramlistsort"+rid+"' name='paramlistsort"+rid+"' type='text'  value=''/></div></div></div></div></td>"+
		"<td ><div class='form'><div class='fields'><div class='field field-first'><div class='typeinput'><input id='delbutton"+rid+"' name='delbutton"+rid+"' type='button' value='删除' onClick='delParamPChild("+rid+")'/></div></div></div></div></td>"+
		"</tr>";
		$('.table tbody').append(html);
	});
	/**
	 * 创建json串
	 * @return
	 */
	buildJsonParam=function(){
		var msub1="";
		var msub2="";
		var html1="";
		var html="";
		var rjson="";
		$("input:text").each(function(){
			var json="[";
			var paramlistname="paramlistname";
			var paramlistsort="paramlistsort";
			var sub1="";
			var sub2="";
			//if(this.name!="name"){
				if(this.name.substring(0,13)==paramlistname){
					sub1="{\"name\":\""+this.value+"\",\"id\":\""+this.id+"\"";
					msub1=sub1;
					sub1="";
					msub2="";
				}
				if(this.name.substring(0,13)==paramlistsort){
					sub2=",\"sortList\":\""+this.value+"\"}";
					msub2=msub1+sub2;
					sub2="";
					html1+=msub2+",";
				}
			//}
		});
		html+=html1;
		rjson="["+html.toString().substring(0,html.length-1)+"]";
		globalrjson=rjson;
	},
	/**
	 * 增加商品类型
	 */
	$("#submit").click(function(data){
		var name=$("#name").val();
		if(name==""){
			formwarning("#alerterror","请填写商品类型名称");
			return false;
		}
		this.value="提交中";
		this.disabled=true;
		$.post("addGoodsTypeTN.action",{"name":name},function(data){
			if(data.sucflag){
				$("#alerterror").remove();
				forminfo("#alertinfo","商品类型增加成功，请增加参数列表吧");
				$("#goodstypetnparamsarea").show();
			}else{
				formwarning("#alerterror","商品类型增加失败");
				return false;
			}
		});
		this.value="提交成功";
	});
	/**
	 * 增加商品类型参数
	 */
	$('#submitparam').click(function(){
		var name=$('#name').val();
		if(name==""){
			jAlert('商品类型名称必须填写', '信息提示');
			return false;
		}
		var msub1="";
		var msub2="";
		var html1="";
		var html="";
		var rjson="";
		$("input:text").each(function(){
			//var json="[";
			var paramlistname="paramlistname";
			var paramlistsort="paramlistsort";
			var sub1="";
			var sub2="";
//			if(this.name!="name"){
				if(this.name.substring(0,13)==paramlistname){
					sub1="{\"name\":\""+this.value+"\",\"id\":\""+this.id+"\"";
					msub1=sub1;
					sub1="";
					msub2="";
				}
				if(this.name.substring(0,13)==paramlistsort){
					sub2=",\"sortList\":\""+this.value+"\"}";
					msub2=msub1+sub2;
					sub2="";
					html1+=msub2+",";
				}
			//}
		});
		html+=html1;
		rjson="["+html.toString().substring(0,html.length-1)+"]";
		//数据增加，jquery读取json数据形成表单，更新商品类型
		$.post("addGoodsTypeTNajax.action",{"name":name,"goodsParameter":rjson},function(data){
			window.location.href="goodstypetnmanagement.jsp?session="+session+"#goods";
		});
	});
	var goodsTypeId=$.query.get('goodsTypeId');
	if(goodsTypeId==""){
		return false;
	}
	$.post("findGoodsTypeTNById.action",{"goodsTypeId":goodsTypeId},function(data){
		//注入隐藏的商品类型id
		$('#goodsTypeId').attr("value",data.bean.goodsTypeId);
		$('#name').attr("value",data.bean.name);
		var html="";
		var rid="";
		var length=0;
		var HtmlJson = $.parseJSON(data.bean.goodsParameter);
		if(HtmlJson!=null){
			$.each(HtmlJson, function(i,item){
				rid=item.id;
				length=rid.length;
				rid=rid.substring(13,length);
				html+="<tr id='add"+rid+"'>" +
				"<td class='title'><div class='form'><div class='fields'><div class='field field-first'><div class='typeinput'><input id='paramlistname"+rid+"' name='paramlistname"+rid+"' value='"+item.name+"' class='small'/></div></div></div></div></td>"+
				"<td ><div class='form'><div class='fields'><div class='field field-first'><div class='typeinput'><input id='paramlistsort"+rid+"' type='text' name='paramlistsort"+rid+"' value='"+item.sortList+"'/></div></div></div></div></td>"+
				"<td ><div class='form'><div class='fields'><div class='field field-first'><div class='typeinput'><input id='delbutton"+rid+"' name='delbutton"+rid+"' type='button' value='删除' onClick='delParamPChild("+rid+")'/></div></div></div></div></td>"+
				"</tr>";
			});
		}
		$('.table tbody').append(html);
		//显示修改按钮
		$('#update').show();
		$('#updateparam').show();
		//隐藏增加按钮
		$('#submit').hide();
		$('#submitparam').hide();
	});
	/**
	 * 修改商品类型数据
	 */
	$('#update').click(function(){
		var name=$('#name').val();
		if(name==""){
			jAlert('商品类型必须填写', '信息提示');
			return false;
		}
		var goodsTypeId=$('#goodsTypeId').val();
		buildJsonParam();
		$.post("UpdateGoodsTypeTN.action",{"goodsTypeId":goodsTypeId,"name":name,"goodsParameter":globalrjson},function(data){
			if(data.sucflag){
				window.location.href="goodstypetnmanagement.jsp?session="+session+"#goods";
			}
		});
	});
	$('#updateparam').click(function(){
		var name=$('#name').val();
		if(name==""){
			jAlert('商品类型必须填写', '信息提示');
			return false;
		}
		var goodsTypeId=$.query.get('goodsTypeId');
		if(goodsTypeId==""){
			jAlert('商品类型参数获取错误', '信息提示');
			return false;
		}
		buildJsonParam();
		$.post("UpdateGoodsTypeTN.action",{"goodsTypeId":goodsTypeId,"name":name,"goodsParameter":globalrjson},function(data){
			if(data.sucflag){
				window.location.href="goodstypetnmanagement.jsp?session="+session+"#goods";
			}
		});
	});
});


	


/*===========================================Gorgeous split-line==============================================*/
/**
 * main logic
 */
$(function(){
	var operate = $.query.get("operate");
	if (operate == "add") {
		$("#goodstypetnparamsarea").hide();
		return;
	}
});


/*===========================================Gorgeous split-line==============================================*/

/**
 * flexigrid list 
 */
$(function() {
	$("#goodstypetnmanagement").flexigrid( {
		url : 'findAllGoodsTypeTN.action',
		dataType : 'json',
		cache : false,
		colModel : [ {
			display : '类型名称',
			name : 'name',
			width : 400,
			sortable : true,
			align : 'center'
		}, {
			display : '创建时间',
			name : 'createtime',
			width : 400,
			sortable : true,
			align : 'center'
		}, {
			display : '操作',
			name : 'operate',
			width : 100,
			sortable : true,
			align : 'center'
		}  ],
		buttons : [ {
			name : '添加',
			bclass : 'add',
			onpress : action
		}, {
			name : '编辑',
			bclass : 'edit',
			onpress : action
		}, {
			name : '删除',
			bclass : 'delete',
			onpress : action
		}, {
			separator : true
		} ],
		searchitems : [ {
			display : '请选择搜索条件',
			name : 'sc',
			isdefault : true
		} ],
		sortname : "createtime",
		sortorder : "desc",
		usepager : true,
		title : '',
		useRp : true,
		rp : 20,
		rpOptions : [ 5, 20, 40, 100 ],
		showTableToggleBtn : true,
		width : 'auto',
		height : 'auto',
		resizable : true,
		dragtype : 'colMove',
		pagestat : '显示{from}到{to}条，共{total}条记录',
		procmsg : '正在获取数据，请稍候...',
		checkbox:true
	});
	function action(com, grid) {
		if (com == '添加') {
			window.location.href = "goodstypetn.jsp?operate=add&folder=goods";
			return;
		} else if (com == '编辑') {
			if($('.trSelected',grid).length==1){
				jConfirm('确定编辑此项吗?', '信息提示', function(r) {
					if (r) {
						var str=$('.trSelected',grid)[0].id.substr(3);
						window.location.href = "addgoodstypetn.jsp?session="+session+"#goods&goodsTypeId=" + str;
						return;
					}
				});
			}else{
				jAlert('请选择一条信息', '信息提示');
				return false;
			}
		} else if (com == '删除') {
			if($('.trSelected',grid).length>0){
				jConfirm('确定删除此项吗?', '信息提示', function(r) {
					if (r) {
						var str="";
						$('.trSelected',grid).each(function(){
							str+=this.id.substr(3)+",";
						});
						$.post("DelGoodsTypeTN.action", {
							"goodsTypeId" : str
						}, function(data) {
							$('#goodstypetnmanagement').flexReload();
						});
					}
				});
				return;
			}else{
				jAlert('请选择要删除的信息!','信息提示');
				return false;
			}
		}
	}

});

/*===========================================Gorgeous split-line==============================================*/
