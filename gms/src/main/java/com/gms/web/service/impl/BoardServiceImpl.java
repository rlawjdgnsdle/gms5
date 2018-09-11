package com.gms.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.domain.ArticleDTO;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService{
	@Autowired
	BoardMapper boardDAO;
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Override
	public void add(ArticleDTO p) {
		
		boardDAO.add(p);
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArticleDTO retrieve(ArticleDTO p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modify(ArticleDTO article) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean remove(ArticleDTO p) {
		// TODO Auto-generated method stub
		return false;
	}

}
