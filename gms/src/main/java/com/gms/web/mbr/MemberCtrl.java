package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.cmm.TaeHyung;
import com.gms.web.cmm.Util;

@RestController
@RequestMapping("/mbr")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member mbr;
	@Autowired MemberMapper mbrMap;
	@Autowired TaeHyung tae;
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member prm) {
		logger.info("\n MemberCtrl ::::: {} ","add()");
		 Util.Log.accept("MbrCtrl add");
		 mbr = prm;
		 
		return null;
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public String retrieve(@ModelAttribute("user") Member user) {
		logger.info("\n MemberCtrl ::::: {}","retrieve()");
		return "retrieve";
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("user") Member user) {
		logger.info("\n MemberCtrl ::::: {}","modify()");
		return "retrieve";
	}
	
	
	@PostMapping("/login")
	public @ResponseBody Member login(@RequestBody Member mem) {
		Util.Log.accept("넘어온 아이디"+mem.getMemberId());
		Util.Log.accept("넘어온 비번"+mem.getPass());
		HashMap<String,Object> rmap = new HashMap<>();
		
		Member m = null;
		if(Util.notONull.test(mbrMap.get(mem))) {
			Function<Member,Member> f = (t) -> {
				return mbrMap.get(t);
			};
			m = f.apply(mem);
		}else {
			
		}
		rmap.put("member", m);
		
return m;
		
		
		
		
		
		//		logger.info("\n MemberCtrl ::::: {}","login()");
//		Map<String,Object> rm = new HashMap<>();
//		Util.Log.accept("넘어온 로그인정보: "+pm);
//		String pwValid = "WRONG";
//		String idValid = "WRONG";
//		if(mbrMap.count(pm)!=0) {
//			idValid = "CORRECT";
//			Util.Log.accept("ID 유효성체크결과 : "+idValid);
//			Function<Member,Member> f = (t)->{
//				return mbrMap.get(t);
//			};
//			mbr = f.apply(pm);
//			pwValid = (mbr != null) ?"CORRECT":"WRONG";
//			mbr = (mbr != null) ?mbr:new Member();
//			Util.Log.accept("PW 유효성체크결과 : "+pwValid);
//		}
//		Util.Log.accept("ID 유효성체크결과 2: "+idValid);
//		Util.Log.accept("PW 유효성체크결과 2: "+pwValid);
//		Util.Log.accept("MBR 유효성체크결과 2: "+mbr.toString());
//		rm.put("ID", idValid);
//		rm.put("PW", pwValid);
//		rm.put("MBR", mbr);
//		return rm;
	}
}