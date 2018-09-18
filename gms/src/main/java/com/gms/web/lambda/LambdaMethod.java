package com.gms.web.lambda;

import java.util.function.Consumer;
import java.util.function.Function;

public class LambdaMethod {
	public static void main(String[] args) {
		// 파라미터값 //리턴값
//		Function<String,Integer> f
//			= s -> Integer.parseInt(s);
//					↓↓↓↓↓↓	↓↓↓↓↓↓
//		여기선 리턴값이 하나(스칼라) 만약 두개 이상이라면 안 되지만 하나일 경우 이렇게 생략가능
// 		어차피 하나니까…

		Function<String, Integer> f = Integer::parseInt;
		int a = f.apply("1");
		System.out.println("a : " + a);

		// Consumer<String> c = s -> System.out.println(s);
		// c.accept("Hello Lambda!!");   fsfse	
		// ↓↓↓↓↓↓ ↓↓↓↓↓↓ 
		Consumer<String> c = System.out::println;
		c.accept("Hello Lambda!!");
		

	}
}
