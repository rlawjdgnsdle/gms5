"use strict";
var ui={
	div : x=>{return $('<div/>').attr(x);},
	
	span : x=>{return $('<span/>').attr(x);},
	anchor : x=>{	// ui.anchor({txt:'',id=''});
		return $('<a/>').attr({href : '#',id : x.id}).html(x.txt);},
	ul : x=>{ 
		let ul = $('<ul/>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({
				id : x.id+'-'+i
			}).appendTo(ul);
		}
		return ul;
	},
	input : x=>{ // id,val
		let res = ui.div({}).addClass("input-group mb-3");
		// ui를 만들어서 p에 담음 
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.div__val
						+'</span>').appendTo(res);
		
		$("<input/>").attr({
			id : x.id,
			type: 'text',
			placeholder:"입금액",
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(res);
		return res;
		
		
		

	},
	label : x=>{
		return $('<label/>')
				.attr('for',x.id).text(x.txt)
	},
	btn : x=>{
		return $('<button/>')
			.attr('type','button')
			.addClass('btn btn-'+x.clazz)
			.html(x.txt);
	},
	
//	page : x => {
//		let ul = $('<ul/>').addClass("pagination justify-content-center");
//		ul.append(
//				$('<li/>').addClass("page-item"+((x.existPrev)?"":"disabled")).append(
//						$('<'+(x.existPrev)?"a":"span")+'>').addClass("page-link").attr({href:"#",id:x.prevBlock}).text("◀")
//		));
//		for(let i=x.beginPage;i<=x.endPage;i++){
//			$('<li/>').addClass("page-item"+((i==x.page)?"active":""))
//			.append(
//					$('<a/>').addClass("page-link").attr({href:"#",id:i}).text(i).appendTo(ul);
//		}
//		ul.append(
//				$('<li/>').addClass("page-item"+((x.existNext)?"":"disabled")).append(
//						$('<'+(x.existNext)?"a":"span")+'>').addClass("page-link").attr({href:"#",id:x.nextBlock}).text("▶")
//		));
//			return $('<nav/>').attr({"aria=label":"pagination"}).append(ul);
//	},

	
/*	let li1 = $('<li/>').addClass("page-item").append($('<a/>').addClass("page-link").text("1").attr('href','#'));
	let li2 = $('<li/>').addClass("page-item").append($('<a/>').addClass("page-link").text("2").attr('href','#'));
	let li3 = $('<li/>').addClass("page-item").append($('<a/>').addClass("page-link").text("3").attr('href','#'));
	let li4 = $('<li/>').addClass("page-item").append($('<a/>').addClass("page-link").text("4").attr('href','#'));
	let li5 = $('<li/>').addClass("page-item").append($('<a/>').addClass("page-link").text("5").attr('href','#'));
	let li6 = $('<li/>').addClass("page-item").append($('<a/>').addClass("page-link").text("NEXT").attr('href','#'));*/
	
//	let preli = $('<li id="prev" class="page-item">'+prev+'"><span class=>)
//	let nextli = $('<li id="next" class="page-item">'+next+'"><span class=>)
	page : x=>{
		return $('<ul class="pagination"/>')
			.appendTo($('<nav/>')
			.attr('aria-label','...'));
},
	
	
	tbl : x=>{
		let t = $('<table/>').addClass("table");
		let thead = $('<thead/>');
		let tr = $('<tr/>');
		$.each(x.list , (i,j)=>{
			$('<th/>')
			.html(j)
			.appendTo(tr);
		});
		tr.appendTo(thead);
		thead.appendTo(t);
		$('<tbody/>').appendTo(t);
	
		return t;
	},
	
	input2 : x =>{
		let p = ui.div({}).addClass("input-group mb-3");
		ui.div({id:'test'}).addClass("input-group-prepend").appendTo(p);
		$('#test').html('  <span class="input-group-text" id="basic-addon1">@</span> ');
		$("<input/>").attr({ 
			id : x.input__id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(res);
		return p;
	},

	inputGroupPrepend : x =>{
		return '<div class="input-group mb-3">'
		  +'<div class="input-group-prepend">'
		  +'  <span class="input-group-text" id="basic-addon1">@</span> '
		  +'</div>'
		  +'<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
		+'</div>'
	}
	
	
	
}
/*
 * 
let ul = $('<ul/>');
		 // x 는 json 의 array
		$( "div" ).each(function( index, element ) {
		    // element == this
		    $( element ).css( "backgroundColor", "yellow" );
		    if ( $( this ).is( "#stop" ) ) {
		      $( "span" ).text( "Stopped at div index #" + index );
		      return false;
		    }
       $('<ul/>').each(function(3,$('<li/>')){
				$(this).appendTo(ul);
			}
   		);
		ul
		.attr({id : x.id})
        .addClass('list-group');
		return ul;
 * 
 */