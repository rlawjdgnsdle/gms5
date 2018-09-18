"use strict"; // 엄격한 문법을 적용하세
var app = app  || {}; 
var user = user || {}; 
// function 스쿱에 정의된 var는 그 공간을 나가며 사라진 
app =(()=>{
	var init =x=>{
		console.log('step 1'+x);
		app.router.init(x);
		
	};
	var onCreate =x=>{
		setContentView();
		// AJAX 코딩은 여기에만 이루어져야 함…
	};
	var setContentView =x=>{
		
	};
	return{init : init};
})();
app.main=(()=>{
	var header,content,nav,ctx,script,style,img,w;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper'),
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
		$.getScript(header,()=>{
			w.html(headerUI());
		});		
		$.when(
		$.getScript($.script()+'/nav.js'),		
		$.getScript($.script()+'/header.js'),		
		$.getScript($.script()+'/content.js'),		
		$.Deferred(y=>{
			$(y.resolve)
			console.log('step3'+y); 
		})
		).done(z=>{
			console.log('step 4');
			w.html(
			navUI()+headerUI()+contentUI(ctx)		
			);
			$('#login_btn').click(e=>{
				e.preventDefault(); // 오리지널보다 훨씬 성능이 좋다…
				app.permission.login();
			});
			$('#board').click(e=>{
				app.board.init();
			});
		})
		.fail(x=>{console.log('로드실패');})
	};
	return{init : init};
})();

app.board =(()=>{
	var init = ()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var list = ()=>{
		alert('게시팜');
		$('#header').remove();		
		$('#content').empty();		
	
	}
})();

app.permission = (()=>{
	var login =x=>{
		alert('login');
		$('#header').remove();
//		$('#thumbnails-with-custom-content').empty();
		$.getScript($.script()+'/login.js').done(e=>{
		$('#thumbnails-with-custom-content').html(loginUI());
		});
	};
	
	return {login : login};
})();
/*app = {
		init : x =>{
			
			app.session.context(x);  // 저장장소 각자 사용자의 모니터 세션에다가 제일 먼저 저장해야하는 것 : 경로
			app.onCreate();
				//이파이패턴으로 전환
		},		
		onCreate : ()=>{
			console.log('step 3');
			app.setContentView();
			$('#login_btn').click(()=>{ //로그인버튼
				alert('login');
				location.href = app.x()+'/move/auth/member/login';
			}); 
			$('#login_submit').click(()=>{ // 제출버튼
				location.href = app.x()+'/member/login/'
				+document.loginForm.memid.value+'/'
				+document.loginForm.pass.value;
			}); 
			$('#mypage').click(()=>{
				alert('mypage button');
				location.href = app.x()+"/member/modify";
				
			});	
			$('#join_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/add";
			});	
				
			$('#joinBth').click(()=>{
				alert('joinBth click');
				$('#joinForm')
				.attr({
					action:app.x()+'/member/add',
					method:"POST"
				}).submit();
				
			});	
			
		
				
				
		},		
		setContentView : ()=>{
				// 동적 UI가 들어가는 장소
			
			
			console.log('step 4 : '+app.j());
		}		
				
};	*/			
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


app.router = {
	init : x=>{
		$.getScript(x+'/resources/js/router.js',
			()=>{
				$.extend(new Session(x));
				$.getScript($.ctx()+'/resources/js/util.js')
        		.done(x=>{
        			console.log('실행');
        			app.main.init();
        		})
        		.fail(x=>{console.log('실패')});
				
			}	
		);
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
		
user.session = x=>{
	$.each(x, (k,v)=>{
		sessionStorage.setItem(k, v);
			});
	alert(sessionStorage.getItem('memid'));
}
