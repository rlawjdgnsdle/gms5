package com.gms.web.controller;

import java.util.HashMap;

import java.util.Map;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.javassist.compiler.ast.Member;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.internal.Function;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.gms.web.cmm.Util;
import com.gms.web.domain.MemberDTO;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberController {
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberDTO member;
	@Autowired MemberService memberSerivce;
	@Autowired MemberMapper memberMapper;
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public void add(@ModelAttribute("member") MemberDTO member) {
		System.out.println("name is " + member.getMemname());
		memberSerivce.add(member);
	}

	@RequestMapping("/list")
	public void list() {
	}

	@RequestMapping("/search")
	public void search() {
	}

	@RequestMapping("/retrieve")
	public String retrieve(Model model, @ModelAttribute("user") MemberDTO user) {
		System.out.println("============retrieve========");
		member.setMemid(user.getMemid());
		System.out.println("Mem_id : " + user.getMemid());
		model.addAttribute("user", memberSerivce.retrieve(member));
		System.out.println("Model에 담기는 값 : " + memberSerivce.retrieve(member));
		
		return "retrieve:member/retrieve.tiles";
	}

	@RequestMapping("/count")
	public void count() {
	}

	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String modify(@ModelAttribute("member") MemberDTO member,
						 @ModelAttribute("user") MemberDTO user) {
		
		System.out.println("member : " + member);
		System.out.println("user : " + user);
		member.setMemid(user.getMemid());
		System.out.println("member : "+ member);
		
		
		memberSerivce.modify(member);
		user = memberSerivce.retrieve(member);
		user.setPass(member.getPass());
		user.setTeamid(member.getTeamid());
		user.setRoll(member.getRoll());
		
		return "retrieve:member/retrieve.tiles";
	}

	@RequestMapping(value = "/remove", method = RequestMethod.POST)
	public String remove(HttpSession session,
			@ModelAttribute("member") MemberDTO member,
			@ModelAttribute("user") MemberDTO user) {
		member.setMemid(user.getMemid());
		memberSerivce.remove(member);
		System.out.println("user : "+user);
		
		return "redirect:/";
}
	
	@PostMapping("/login")
	public String login(Model model,
			@ModelAttribute("member") MemberDTO member) {					
		logger.info("\n --------- MemberController {} !!--------", "login()");
		Predicate<String> p = s-> s.equals("");
		Predicate<String> notP = p.negate();
		String view = "login failed";
		if(notP.test(memberMapper.exist(member.getMemid()))) {
			Function<MemberDTO,MemberDTO> f = (t)-> {
				return memberMapper.login(t);
			};
			view = (notP.equals((f.apply(member)))) ? 
					"login_success" : 
					"login failed" ;
						
		}
	//	member = (Predicate.isEqual("login_success").test(view)) ?
//				memberMapper.selectOne(member.getMemid()):
////				new Member();
	//			Util.Log.accept(member.toString());
				return view;
		
		
//		MemberDTO m1 = memberSerivce.login(member);
//		if(m1!=null) model.addAttribute("user", m1); 
//		return (m1==null)?"login_fail":"login_success";//
//		
	}

	@RequestMapping("/logout")
	public String logout(SessionStatus sessionStatus) {
		sessionStatus.setComplete();
		logger.info("\n --------- MemberController {} !!--------", "logout()");
		return "redirect:/";
	}

	@RequestMapping("/fileUpload")
	public void fileUpload() {
	}

}
