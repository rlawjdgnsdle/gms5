"use strict"
$.prototype.nullChecker=x=>{
	var flag = false;
	var i = 0;
	for (i in x){
		if(x[i]===''){
			flag = true;
		}
	}
	return flag;
}
$.prototype.zeroChecker=x=>{
	var flag = false;
	var i = 0;
	for (i in x){
		if(x[i]==0){
			flag = true;
		}
	}  // Synch를 쓸지 ASynch를 쓸지 개발자가 판단해야한다.(화면은 전부 ASynch 방식이 되어야함) 자바스크립트의 object 공간에 fn(function 약자)이라는 키워드를 사용
	return flag;
}
$.prototype.anchor=x=>{
	/*let anchor = $('<a/>')
	.attr({href:"#"})
	.html('등차수열의 합')*/
	// let => static값처럼 안없어진다… 이걸 되도록 안 쓰게 하는것이 ↓ 람다이다
	return $('<a/>')
	.attr({href:"#"})
	.html(x.txt)
}