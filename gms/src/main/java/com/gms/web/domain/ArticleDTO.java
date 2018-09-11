package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy // 게으르다… 설거지를 미우고 미뤄둔다… @Lazy를 걸어버리면… 
public class ArticleDTO {
	 private String bno,
					title,
					content,
					writer,
					regdate,
					viewcnt;
}
