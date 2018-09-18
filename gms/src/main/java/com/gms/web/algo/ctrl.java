package com.gms.web.algo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.gms.web.cmm.Util;

@RestController
@RequestMapping("/algo")
public class ctrl {
	/*static final Logger logger = LoggerFactory.getLogger(crtl.class);*/
	
	@RequestMapping("/money/{money}/")
	public void money(@PathVariable String money) {
		Util.Log.accept("넘어온 화폐값 : get"+money);
	}
	
	@PostMapping("/money/")
	public @ResponseBody Map<String,Object>
	money2(@RequestBody Map<String,Object>map) {
		Map<String,Object>rmap=new HashMap<>();
		// 경로를 따로 지정해주지 않았음 /./. 데이터값만 리턴
		Util.Log.accept("넘어온 화폐값 : "+map.get("money"));
		rmap.put("text", "축하축하");
		return rmap;
	}
}
