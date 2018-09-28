package com.gms.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component // 이 클래스를 bean 으로 쓰겠다
@Data // 아래 선언한 변수를 자동 getter setter 화 시키겠다는 뜻이라는 겁니다
@Lazy
public class Member {
	private String memberId, teamId, name, ssn, roll, pass, age, gender, subject, email, phone;
}
