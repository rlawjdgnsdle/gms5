package com.gms.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.domain.ArticleDTO;
import com.gms.web.domain.MemberDTO;
import com.gms.web.service.BoardService;
import com.gms.web.service.MemberService;

@Controller

@RequestMapping("/board") 
public class BoardController {
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	@Autowired ArticleDTO article;  // 싱글톤에있는걸 GETINSTANCE 한것?
	@Autowired BoardService boardservice;  // 싱글톤에있는걸 GETINSTANCE 한것?
	// MemberDTO m = new MemberDTO(); ← 최 악 의 코 드 IOC에선 스프링이 객체를 다 만드는데 개발자가 만들이유가 없습니다
	
	@RequestMapping("/add")
	public void add(@ModelAttribute ArticleDTO article){

		System.out.println("==/BoardController add/==");
		boardservice.add(article);
	}
	@RequestMapping("/list")
	public void list() {}
	
	@RequestMapping("/search")
	public void search() {}

	@RequestMapping("/retrieve")
	public void retrieve() {
		System.out.println("============retrieve========");
	}
	@RequestMapping("/count")
	public void count() {}

	@RequestMapping("/modify")
	public void modify(@ModelAttribute MemberDTO member) {
		
	}
	
	@RequestMapping("/remove")
	public void remove() {}
	
	@RequestMapping("/login/{memid}/{pass}")
	public String login(
			@PathVariable String memid,
			@PathVariable String pass,
			Model model
			) {
		String loginForm = "login_success";
		logger.info("\n --------- MemberController {} !!--------","login()");
		logger.info("로그인폼에서 받아온 userid getParameter : "+memid);
		logger.info("로그인폼에서 받아온 Pass getParameter : "+pass);
		Map<String, String> p = new HashMap<>();
		
		p.put("memid", memid);
		MemberDTO m = /*memberSerivce.retrieve(p);*/null; 
		logger.info("============================");
		logger.info("검색된(DB) 멤버 아이디는 : "+m.getMemid());
		logger.info("검색된(DB) 멤버 패스워드는 : "+m.getPass());
		logger.info("============================");
		if(pass.equals(m.getPass())) {
			loginForm = "login_success";
		}else {
			loginForm = "login_fail";
		}
		model.addAttribute("member", m);
			/*loginForm = "login_fail";*/
		
		return loginForm;
	}
		
	@RequestMapping("/logout")
	public String logout() {
		logger.info("\n --------- MemberController {} !!--------","logout()");
			
		return "redirect:/";
}		
	@RequestMapping("/fileUpload")
	public void fileUpload() {}
	
}

