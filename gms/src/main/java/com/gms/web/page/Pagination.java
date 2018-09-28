package com.gms.web.page;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Data @Component @Lazy
public class Pagination implements Proxy{
	int pageNum,count,pageSize,blockSize,beginPage,endPage,beginRow,endRow,prevBlock,nextBlock;
	boolean existPrev,exisNext; 
	
	@Override
	public void carryOut(Object o) { // 컨트롤러에서 온 rmap
		System.out.println("페이지네이션 캐리아웃");
		@SuppressWarnings("unchecked")
		Map<String,Object> map = ((Map<String, Object>)o);
		pageNum = Integer.parseInt((String) map.get("pageNum")); // pageNum의 키값으로 get 하는 장면
		System.out.println("넘어온 pageNum값 : "+pageNum);
		pageSize = 5; 
		blockSize = 5;
		count =  (int) map.get("count");
		beginPage = Math.floorDiv(pageNum-1, pageSize)*pageSize+1;
		endPage = (count>(beginPage+(blockSize-1))*pageSize)?
				beginPage+(blockSize-1):(int)(Math.ceil(count/(double)pageSize));
		beginRow = (pageNum-1)*pageSize+1;
		endRow = (count>pageNum*pageSize)?pageNum*pageSize:count;
		prevBlock = beginPage -1;
		nextBlock = endPage +1;
		existPrev = (beginPage>1);
		exisNext = (count>endPage*5);
		System.out.println("계산끝");
		// countRow , existPrev prevBlock beginPage exisNext nextBlock 
		
		// 계산끝
		
	}
}