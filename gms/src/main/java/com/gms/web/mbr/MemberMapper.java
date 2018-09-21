package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository // 기능을 앞으로 가져 올 Mapper
public interface MemberMapper {
	public void post(Member p);
	public List<?> list(Map<?,?>p);
	public Member get(Member p);
	public Integer count(Member p);
	public void put(Member p);
	public void delete(Member p);
		
}
//