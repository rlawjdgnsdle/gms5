package com.gms.web.msg;

import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;
@Component
@Data
@Lazy
public class Message {

	private Integer mid;
	private String targetid;
	private String sender;
	private String message;
	private Date opendate;	
	private Date senddate;
	
	
}


 
