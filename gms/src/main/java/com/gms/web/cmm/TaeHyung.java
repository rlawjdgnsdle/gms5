package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberCtrl;
@Component
public class TaeHyung {
	public Member ageAndGender (Member member){
		Function<Member, Member> f = m -> {
			String ssn = member.getSsn();
			String gender = String.valueOf(ssn.charAt(7));
			if (Integer.parseInt(gender) + 2 % 2 == 1) {
				gender = "남자";
			} else {
				gender = "여자";
			}
			m.setAge(String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) + 1
					- Integer.parseInt(("19" + (ssn.substring(0, 2))))));
			m.setGender(gender);
			return m;
		};
			
		return f.apply(member);
	
}
	
}
