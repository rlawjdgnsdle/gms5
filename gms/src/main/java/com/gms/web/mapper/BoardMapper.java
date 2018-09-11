package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.domain.ArticleDTO;
import com.gms.web.domain.MemberDTO;

@Repository
public interface BoardMapper {
	public void add(ArticleDTO p);
	public ArticleDTO selectOne(Map<?, ?> p);
	public List<?> selectSome(Map<?,?>p);
	public List<?> selectList(Map<?,?>p);
	
	public int count(Map<?,?>p);
	public void update(ArticleDTO p);
	public void delete(ArticleDTO p);
	public MemberDTO login(Map<?, ?>p);
	public int countPaging();
	public ArticleDTO listCriteria();
	public ArticleDTO listPage();
	public List<ArticleDTO> listSearch();
}
