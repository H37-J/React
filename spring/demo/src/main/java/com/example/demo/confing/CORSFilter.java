package com.example.demo.confing;

import javax.servlet.Filter;

import java.io.IOException;

import javax.servlet.*;
import javax.servlet.http.*;

import org.springframework.context.annotation.Configuration;

import java.util.*;

@Configuration
public class CORSFilter implements Filter{
	
	public static void main(String[] args) {
		int r=1;
		ArrayList<Integer> arr=new ArrayList<Integer>();
		
	}

	@Override
    public void doFilter(ServletRequest req,ServletResponse res, FilterChain chain) throws IOException,ServletException{
        HttpServletResponse response=(HttpServletResponse) res;
        response.setHeader("Access-Control-Allo-Origin","*");
        response.setHeader("Access-Control-ALlow-Credentials", "true");
        response.setHeader("Access-Control-ALlow-Methods","POST,GET,PUT,OPTIONS,DELETE");
        response.setHeader("Access-Control-Allow-Max_Age","3600");
        response.setHeader("Access-control-Allow-Headers", "X-Requested-With,Content-Type,"+"Authorization,Origin,Accept,Access-Control-Request-Method,Access-Control-Request-Headers");
        
        chain.doFilter(req,res);
         
    }
	
	public void init(FilterConfig filterConfig) {}
	
	public void destory() {}

}