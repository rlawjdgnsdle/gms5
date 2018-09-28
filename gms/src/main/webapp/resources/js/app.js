"use strict"; // 엄격한 문법을 적용하세
var app = app  || {}; 
var user = user || {}; 
// function 스쿱에 정의된 var는 그 공간을 나가며 사라진 
//
app =(()=>{
	var init = x =>{
		console.log('step 1'+x);
		app.router.init(x); // == /web
		//app.router로 감 #@#
		//
	};
	x =>{
		console.log('step 1'+x);
		app.router.init(x);
//		화살표 함수
	}
	var onCreate =x=>{
		setContentView();
		// AJAX 코딩은 여기에만 이루어져야 함…
	};
	var setContentView =x=>{
	};
	return{init : init};
		// 키값    	내용
})();


/*a = getInstance(); // 리턴값이 있거나 없거나  
app = (()=>{ // ()의 의미는 데이터를 던지고 받는 게 없다는 의미 파라미터값이 만들 떄부터 없다
})();
*/
app.main=(()=>{
	var header,content,nav,ctx,script,style,img,w;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		
		alert('1 >>>>'+script);
		content = script+'/content.js';
		nav = script+'/nav.js';
		header = script+'/header.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView();

	};
	var setContentView =()=>{
		app.router.home();
	};
	return{init : init};
})();

app.board = (()=>{
	var w,header,footer,content,nav,ctx,script,style,img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		header = script+'/header.js';
		content = script+'/content.js';
		nav = script+'/nav.js';
		footer = script+'/footer.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
	
		app.service.boards(1);
	};
	return {init:init};
})();
	
/*$(' ') Tag 을 불러옴
$('#') id값 을 불러옴
$('.') Class 를 불러옴*/
	// append와 appendTo의 차이점	
	// $(A).append(B)  A 에 B 값을 추가(맨 끝에 추가)
	//   반대의 의미		
	// $(A).appendTo(B) A 값을 B 에 추가(맨 끝에 추가)
app.permission= (()=>{
	
	var login =x=>{
		alert('login');
		$('#header').empty();
				// header id 를 가지고 있는 태그를 제거
		$('#content').empty(); 
				// content 라는 id 를 가지고 있는 태그를 비워준다.
				// ↓html이면 자동으로 $() 해당 위치를 비워주기 때문에 굳이 empty를 사용하지 않아도 된다 // 물론 appendTo 라면 해야함 appendTo에 들어가는 파라미터는 돔 Type
		$.getScript($.script()+'/compo.js',()=>{
			
			$.getScript($.script()+'/login.js',()=>{ 
				
				// 완벽한 옵저버패턴 대기상태로 있다가 js파일을 불러올 때 동작함 .done과는 다름 콜백구조 "%%%" ,()=>
$('#content').html(loginUI()); // 반환하는 메소드는 DOM 객체
// 앞에놈을 가져다가 0, 00 뒤엣놈이 먹어버린다.

			}).done(x=>{
ui.anchor({txt:'로그인', id : 'login_submit'})
.addClass("btn btn-primary")
.appendTo($('#login-box'));
// 버튼만들기
$('#login_submit').click(()=>{ 
/*	e.preventDefault();*/	

$.ajax({ // 속성값이 여러개이기 때문에 제이슨 구조
	url : $.ctx()+'/mbr/login',
	// $.ctx() = /web + /member + /login
	method : 'POST',
	// 메소드 get / post 설정
	contentType : 'application/json',
	
	data : JSON.stringify({memberId : $('#memid').val(),
							pass : $('#pass').val()}),
							success : d=>{
								alert('ID 판단 :: '+d.memberId);
								alert('PW 판단 :: '+d.pass);
								if(d.memberId==="WRONG"){
									
								}else if(d.pass==="WRONG"){
								}else{
									app.router.home();
								}
									
								
							},
							error : (m1,m2,m3)=>{
								alert(m3);
		}		
});
})
});
		});
		
	};
	var add =()=>{
		$('#header').empty();
		$('#content').empty();
		$.getScript($.script()+'/compo.js'),()=>{
			$.getScript($.script()+'/add.js', ()=>{
				$('#content').html(joinUI());
//				let arr = $("[name=subject]")
//				for(var i=0; i<arr.length;i++){
//					alert(arr[i]);
//				}
				
				ui.anchor({id:'joinBtn', txt:'조인'})
				.addClass("btn btn-primary")
				.appendTo("#content-box")
				.click(e=>{
					e.preventDefault();
					alert('click =====');
					var arr = [];
					var sub = $("[name='subject']");
					// 
					let i;
					for(i of sub){
						if(i.checked){
							alert('선택된 과목::'+i.value);
							arr.push(i.value);
						}
					}
					$.ajax({
						url : $.ctx()+'mbr/add',
						method : 'POST',
						contentType : 'application/json',
						data : JSON.stringify({
							memid : $('memid').val(),
							// .val() …… $('돔객체') 의 value를 리턴
							pass : $('pass').val(),
							memname : $('memname').val(),
							ssn : $('ssn').val(),
							teamid : $('teamid').val(),
							roll : $('roll').val(),
							subject : JSON.stringify(arr)}),
							
							success : d=>{
							alert('조인 성공');
						},
						error : (m1,m2,m3)=>{
							alert(m3);
						}
					});
					
				})
				
		});		
		}		
	};
	
	
//	var add =x=>{
//		alert('join');
//		$('#header').empty();
//		$('#content').empty(); 
//		$.getScript($.script()+'/add.js', ()=>{
//				$('#content').html(joinUI());
//		}).done(x=>{
//			$('#joinBth').click(()=>{
//				alert('제출버튼 클릭');
//				$.ajax({
//					url : $.ctx()+'member/add',
//					method : 'POST',
//					contentType : 'application/json',
//					data : JSON.stringify({
//						memid : $('memid').val(),
//						pass : $('pass').val(),
//						memname : $('memname').val(),
//						ssn : $('ssn').val(),
//						teamid : $('teamid').val(),
//						roll : $('roll').val(),
//						subject : $('subject').val()}),
//					success : d=>{
//						alert('조인 성공');
//					},
//					error : (m1,m2,m3)=>{
//						alert(m3);
//					}
//				});
//			});
//		})
//	}
	return {login : login, add : add};
	// 클로저 상태에선 반드시 리턴값이 스칼라로 표현돼야함    y = f(x) 지금보니까 y는 리턴값 x 는 파라미터 값이더라
	//  public String test(int a, int b, String c){
	//	int y = 0;    
	//	if(c.eq("+")){y = a+b}
	//  return y;     ☆들어오는 값은 이렇듯 반드시 하나의 값으로만 리턴돼야한다. 
	//	들어오는 값은 여러개일 수 있지만 나가는 값은 하나여야 한다. => 스칼라여야한다.
	//	
	//}

})();



app.session = {	
		context : x=>{
			console.log('step 2 : '+x);
			sessionStorage.setItem('context',x);
			sessionStorage.setItem('js',x+'/resources/js');
			sessionStorage.setItem('css',x+'/resources/css');
			sessionStorage.setItem('img',x+'/resources/img');
		},
		
		path : x=>{
			return sessionStorage.getItem(x);
		}
}; // 객체 기반 생성… 
app.service = {
		boards : x=>{
			$('#header').remove();
			$('#content').empty();
			$.getJSON($.ctx()+'/boards/'+x ,d=>{
				$.getScript($.script()+'/compo.js',()=>{
					let x = {
							type : 'default', 
							id : 'table', 
							head : '게시판',
							body : '오픈 게시판 ... 누구든지 사용가능',
							list : ['No','제목','내용','글쓴이','작성일','조회수'],
							clazz : 'table table-bordered'
					};
					(ui.tbl(x))
					.appendTo($('#content'));
				    $.each(d.ls,(i,j)=>{
				    	$('<tr/>').append(
				    	$('<td/>').attr('width','5%').html(j.bno),
				    	$('<td/>').attr('width','10%').html(j.title),
				    	$('<td/>').attr('width','50%').html(j.content),
				    	$('<td/>').attr('width','10%').html(j.writer),
				    	$('<td/>').attr('width','10%').html(j.regdate),
				    	$('<td/>').attr('width','5%').html(j.viewcnt)
				    	).appendTo($('tbody'));
				    });
				    ui.page({}).appendTo($('#content'));
				    let ul = $('.pagination');
				    let existPrev = d.page.existPrev;
					let existNext = d.page.existNext;
					let prev = '', next = '';
					if(!existPrev){
						prev = 'disabled';
					}
					if(!existNext){
						next = 'disabled';
					}
					
					for(let i=d.page.prevBlock;i<=d.page.nextBlock;i++){
						let a = $('<a/>').addClass('page-link'); 
						let li = $('<li  class="page-item"/>')
						.addClass((i==d.page.pageNum)?'active':'')
						.append(a).appendTo(ul);
//						switch(i){
//						case i==0 :
//							a.text('');
//						case i==(d.page.beginPage-1) :
//							a.text('◀');
//						case i==(d.page.endPage+1) :
//							a.text('▶');
//						default : a.text(i);
//						}
						if(i==(d.page.prevBlock)){
							a.text('◀');
							if(d.page.existPrev){
								a.click(e=>{
								app.service.boards(i);
								});
							}
						}else if(i==(d.page.nextBlock)){
							a.text('▶');	
							if(d.page.exisNext){
								a.click(e=>{
									app.service.boards(i);
									});
							}
						}else{
							a.text(i)
							.click(e=>{
								app.service.boards(i);
							});
						}
						
						
					}
					
				    $('.page-link').attr('style',"cursor:pointer");
				    ul.appendTo($('#content'));
				});
			});
			
			},
		my_boards : x=>{
			boards : x=>{
				$('#header').remove();
				$('#content').empty();
				$.getJSON($.ctx()+'/boards/'+x.id+'/'+x.pageNo,d=>{
					$.getScript($.script()+'/compo.js',()=>{
						let x = {
								type : 'default', 
								id : 'table', 
								head : '게시판',
								body : '오픈 게시판 ... 누구든지 사용가능',
								list : ['No','제목','내용','글쓴이','작성일','조회수'],
								clazz : 'table table-bordered'
						};
						(ui.tbl(x))
						.appendTo($('#content'));
					    $.each(d.ls,(i,j)=>{
					    	$('<tr/>').append(
					    	$('<td/>').attr('width','5%').html(j.bno),
					    	$('<td/>').attr('width','10%').html(j.title),
					    	$('<td/>').attr('width','50%').html(j.content),
					    	$('<td/>').attr('width','10%').html(j.writer),
					    	$('<td/>').attr('width','10%').html(j.regdate),
					    	$('<td/>').attr('width','5%').html(j.viewcnt)
					    	).appendTo($('tbody'));
					    });
					    ui.page({}).appendTo($('#content'));
					    let ul = $('.pagination');
					    let existPrev = d.page.existPrev;
						let existNext = d.page.existNext;
						let prev = '', next = '';
						if(!existPrev){
							prev = 'disabled';
						}
						if(!existNext){
							next = 'disabled';
						}
						let preli = $('<li id="prev" class="page-item '+prev+'"><span class="page-link">◀</span>');
						
						
						
						let nextli = $('<li id="next"  class="page-item '+next+'""><span class="page-link">▶</span>');
						preli.appendTo(ul).click(e=>{
							
							app.serive.board(i);
						});
						for(let i=d.page.prevBlock;i<=d.page.nextBlock;i++){
							let a = $('<a/>').addClass('page-link'); 
							let li = $('<li  class="page-item"/>')
							.addClass((i==d.page.pageNum)?'active':'')
							.append(a).appendTo(ul);
							
							if(i==(beginPage-1)){
								a.text('◀');
								
							}else if(i==(endPage+1)){
								a.text('▶');	
							}else{
								a.text(i);
							}
							a.click(e=>{
								app.service.boards(i);
							});
							
						}
						nextli.appendTo(ul);
					    $('.page-link').attr('style',"cursor:pointer");
					    ul.appendTo($('#content'));
					});
				});
					
				}
		}
			
	};

//app.router.init(x)
/*app.router.init(x);*/
app.router = {//#@#
	init : x=>{ 
		$.getScript(x+'/resources/js/router.js',
		//달러$기호는 제이쿼리를 의미.. 제이쿼리에 접근할 수 있게 해주는 식별자
		//$(선택자).동작함수();
			()=>{
				
				$.extend(new Session(x));
				$.getScript($.ctx()+'/resources/js/util.js')
        		.done(x=>{
        			console.log('실행');
        			app.main.init();
        		
        		})
        		.fail(x=>{console.log('실패')});
				// 이파이패턴
			}	
		);
	},
	home : ()=>{
		$.when(
				$.getScript($.script()+'/nav.js'),		
				$.getScript($.script()+'/header.js'),		
				$.getScript($.script()+'/content.js'),		
				$.Deferred(y=>{
					$(y.resolve)
					console.log('step3'); 
				})
				).done(z=>{ // 
					$('#wrapper').html(
		        			navUI()
		        			+headerUI()
		        			+contentUI()
		        			);
					
					$('#login_btn').click(e=>{
						// id가 login_btn 인 버튼을 클릭했을 때 이벤트리스너가 작동해
						// app.permission.login 으로 이동
						e.preventDefault(); 
						alert('로그인 버튼 누름');
						app.permission.login();
					});
					
					$('#board_btn').click(e=>{
						e.preventDefault(); 
						alert('게시판 버튼 누름');
						app.board.init();
					});
					
					$('#join_btn').click(e=>{
						e.preventDefault();
						alert('조인버튼 누름');
						app.permission.add();
					});
					
				

					$('#add_btn').click(e=>{
						
					});
				})
				.fail(x=>{console.log('로드실패');})
	}
};


app.x = ()=>{
	return app.session.path('context');
};
app.j = ()=>{
	return app.session.path('js');
};

app.c = ()=>{
	return app.session.path('css');
};
app.i = ()=>{
	return app.session.path('img');
};
//		
//user.session = x=>{
//	$.each(x, (k,v)=>{
//		sessionStorage.setItem(k, v);
//			});
//	alert(sessionStorage.getItem('memid'));
//}
