package com.capg;

import org.apache.log4j.xml.DOMConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class LoanApiApplication extends SpringBootServletInitializer{

	@Override
	   protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	      return application.sources(LoanApiApplication.class);
	   }
	
	public static void main(String[] args) {
		DOMConfigurator.configure("log4j.xml");
		SpringApplication.run(LoanApiApplication.class, args);
	}
}
