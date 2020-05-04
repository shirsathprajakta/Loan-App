package com.capg.LoanAPI;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import com.capg.repository.LoanRepository;
import com.capg.service.LoanService;
@RunWith(SpringRunner.class)
@SpringBootTest
class LoanApiApplicationTests {
@Autowired
	private LoanService service;
//	@MockBean
//	private LoanRepository loanrepo;
	@Test
	void contextLoads() {
	}
//@Test
//public void validateUserTest()
//{
//	String username="a_b";
//	String password="Praj@1234";
//	when(loanrepo.validateUser(username, password)).thenReturn(true);
//	assertEquals(true, service.validateUser(username, password));
//}
//@Test
//public void validateUserTest1()
//{
//	String username="a_bc";
//	String password="Praj@1234";
//	when(loanrepo.validateUser(username, password)).thenReturn(false);
//	assertEquals(false, service.validateUser(username, password));
//}
//@Test
//public void validateRegister()
//{
//	String phoneno="8390677531";
//	String email="ab@gmail.com";
//	when(loanrepo.validateRegister(phoneno, email)).thenReturn(true);
//	assertEquals(true, service.validateRegister(phoneno, email));
//}
@Test
@Rollback(true)
public void validateUserTest()
{
	boolean val=service.validateUser("a_b", "Praj@1234");
	assertEquals(true, val);
}

@Test
@Rollback(true)
public void validateUserTest1()
{
	boolean val=service.validateUser("a_b", "Praj@12345");
	assertEquals(false, val);
}
@Test
@Rollback(true)
public void validateRegister()
{
	boolean val=service.validateRegister("8390677531", "ab@gmail.com");
	assertEquals(true, val);
}

@Test
@Rollback(true)
public void validateRegister1()
{
	boolean val=service.validateRegister("9390677531", "abc@gmail.com");
	assertEquals(false, val);
}
@Test
@Rollback(true)
public void clacEmi()
{
	int emi=service.calEMI(8000, 12, 4);
	assertEquals(666, emi);
	
}
//@Test
//@Rollback
//public void checkBalance()
//{
//	double num=37000;
//	double bal=service.showBalance(7113);
//	assertEquals(num,bal);
//	System.out.println(bal);
//}


}
