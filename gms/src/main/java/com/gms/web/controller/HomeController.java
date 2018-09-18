package com.gms.web.controller;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.cmm.Util;

/**
 * Handles requests for the application home page.
 */
@Controller // 리퀘스트와 세션을 자동으로 먹이겠다는 뜻이랍니다

public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	enum Resources{
		CONTEXT,CSS,JS,IMG
}
	@RequestMapping(value = "/", method = RequestMethod.GET) // value = url 임 
	public String home(Model model, HttpServletRequest request) { // 객체로 정의됨(모델!!) 모델 안에 리퀘스트가 포장되어 있읍니다…
		String context = request.getContextPath();
		logger.info("Welcome home! The client locale is {}.", context);
		model.addAttribute("context",Util.ctx.apply(request));
		Util.Log.accept("aaa ==> "+Util.ctx.apply(request));
		return "main";
	}
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	
	public String move(
			@PathVariable String prefix,
			@PathVariable String dir,
			@PathVariable String page) {
		System.out.println("prefix : "+prefix);
		System.out.println("dir : "+dir);
		System.out.println("page : "+page);
		logger.info("\n --------- HomeController {} !!--------","move()");
		String path = prefix+":"+dir+"/"+page+".tiles";
		logger.info("\n move page >>> {}",path);
		return path;// auth:member/modify.tiles
	}
	
}

