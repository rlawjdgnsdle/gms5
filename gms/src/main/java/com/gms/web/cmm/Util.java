package com.gms.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class Util {
	public static Consumer<Integer> Logi = System.out::println;
	public static Consumer<String> Log = System.out::println;
	public static Function<String,Integer> convInt = Integer::parseInt;
	public static Predicate<String> pred = s-> s.equals("");
	public static Predicate<String> predi = pred.negate();
	}
