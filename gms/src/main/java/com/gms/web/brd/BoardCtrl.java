package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Board board;
	@Autowired BoardService boardService;
	@Autowired BoardMapper brdMap;
	@Autowired Pagination page;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String,Object>
		list(@PathVariable String pageNo){ //  pathvariable로 pageNo를 받아옴
		System.out.println("pathvariable로 pageNo를 받아와서");
		logger.info("\n BoardCtrl ::::: {} ","list()");
		Map<String,Object> rmap = new HashMap<>(); // map생성
		System.out.println("map을 만들고");
		rmap.put("pageNum", pageNo); // 페이지네이션에 필요한 것들을 map에담음
		rmap.put("count", 60);
		Util.Log.accept("넘어온 페이지 : "+pageNo);
		rmap.put("countRow", brdMap.countAll());
		Util.Log.accept("countRow : "+page.getCount());
		Util.Log.accept("existPrev : "+page.isExisNext());
		Util.Log.accept("prevBlock : "+page.getPrevBlock());
		Util.Log.accept("beginPage : "+page.getBeginPage());
		Util.Log.accept("exisNext : "+page.isExisNext());
		Util.Log.accept("nextBlock : "+page.getNextBlock());
		
		// countRow , existPrev prevBlock beginPage exisNext nextBlock
		Util.Log.accept("전체 게시글 수 : "+brdMap.countAll());
		System.out.println("map에다가 필요한것들을 담아주고 page.carryOut(rmap)으로 보내");
		page.carryOut(rmap); // page -> @Autowired Pagination page;를 의미.
							 // pagination 클래스의 carryOut 메소드로 파라미터 rmap을 실어서 보냄
		System.out.println("다시 돌아왔어");
		System.out.println(page.getBeginRow());
		System.out.println(page.getEndRow());
		System.out.println("이제 DB갈차례 리스트한개 만들어서 mapper에 던지자");
		List<Board> ls = brdMap.listAll(page);
		Util.Log.accept("게시글 리스트 :");
		Util.Log.accept("게시글 리스트 :"+ls);
		rmap.clear();
		rmap.put("ls", ls);
		rmap.put("page", page);
		
		return rmap;
	}
}








//@RequestMapping(value="/add",method=RequestMethod.POST)