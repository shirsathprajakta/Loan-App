package com.capg.repository;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.apache.log4j.xml.DOMConfigurator;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

import com.capg.model.Bank;
import com.capg.model.Transaction;
import com.capg.service.BankExpception;
import com.capg.service.LoanService;

public class LoanRepositoryImpl implements LoanRepositoryCustom{

	static Logger log = LogManager.getLogger(LoanRepositoryImpl.class);
	
	@PersistenceContext
	private EntityManager entityManger;
	
	@Transactional
	@Override
	public Bank createAccount(Bank account) {
		// TODO Auto-generated method stub
		log.info("Start to create account...");
		
		account.setAccno((long)(Math.random()*100000));
		
		int query = entityManger.createNativeQuery("insert into bank values(?,?,?,?,?,?,?,?,?)")
				.setParameter(1, account.getAccno())
				.setParameter(2, account.getAge())
				.setParameter(3, account.getBalance())
				.setParameter(4, account.getEmail())
				.setParameter(5, account.getLoanamount())
				.setParameter(6, account.getName())
				.setParameter(7, account.getPassword())
				.setParameter(8, account.getPhoneno())
				.setParameter(9, account.getUsername())
				.executeUpdate();
		
		if(query>0) {
			entityManger.createNativeQuery("insert into transaction (account_no,message) values (?,?)")
				.setParameter(1, account.getAccno())
				.setParameter(2, "Create Account for "+account.getAccno()+" on "+LocalDate.now())
				.executeUpdate();
				
				log.info("Account Create with account No = "+account.getAccno());
				return account;
		}
		log.error("Create acoout process failed...");
		return null;
		
	}

	@Override
	public boolean validateUser(String username, String password) {
		// TODO Auto-generated method stub
		log.info("validating user....");
		try {
			
			TypedQuery<Bank> query = entityManger.createQuery("from Bank b where b.username= :username and password= :password",Bank.class);
			query.setParameter("username",username).setParameter("password", password).getSingleResult();
			log.info("Validation  successful...");
			return true;
		}catch(NoResultException ex) {
			log.error("validate user failed...");
		}
		
		return false;
	}

	@Override
	public boolean validateAccount(long accountNo) {
		// TODO Auto-generated method stub
		log.info("validating account...");
		try {
			TypedQuery<Long> query = entityManger.createQuery("select accno from Bank b where b.accno= :accountNo",Long.class);
			query.setParameter("accountNo",accountNo).getSingleResult();
			log.info("validation of account complete..");
			return true;
		}catch (NoResultException ex) {
			// TODO: handle exception
			log.info("Validation of account failed...");
			return false;
		}
		
	}

	@Transactional
	@Override
	public String applyLoan(long accountNo, Double loanAmount) {
		// TODO Auto-generated method stub
		log.info("applying for loan");
		try {
			
			Query qu = entityManger.createQuery("from Bank where accNo= :accountNo",Bank.class);
			Bank bank=(Bank) qu.setParameter("accountNo", accountNo).getSingleResult();
		    
			Query query = entityManger.createQuery("Update Bank set loanamount= :loanAmount where accno= :accountNo");
			query.setParameter("loanAmount", bank.getLoanamount()+loanAmount).setParameter("accountNo", accountNo).executeUpdate();
			
			entityManger.createNativeQuery("insert into transaction (account_no,message) values (?,?)")
				.setParameter(1, accountNo)
				.setParameter(2, "Apply for loan by "+accountNo+" on "+LocalDate.now())
				.executeUpdate();
				log.info("loan is successfully applied for account no"+accountNo+"loan amount is:"+loanAmount);
			return "OK";
			
		}catch(NoResultException ex) {
			log.info("applying for loan failed..");
			return "ERROR";
		}	
	}

	@Override
	public Double showBalance(long accountNo) {
		// TODO Auto-generated method stub
		log.info("showing balance...");
		try {
			TypedQuery<Double> query = entityManger.createQuery("select balance from Bank b where b.accno= :accountNo",Double.class);
			Double balance = query.setParameter("accountNo",accountNo).getSingleResult();
			log.info("Balance is :"+balance+"for Acount no :"+accountNo);
			return balance;
		}catch(NoResultException ex) {
			log.info("show balance process failed...");
		}
		
		return null;
	}

	@Override
	public Bank getCust(String username, String passward) {
		// TODO Auto-generated method stub
		log.info("getting customer process successful");
		try {
			TypedQuery<Bank> query = entityManger.createQuery("from Bank b where b.username= :username and password= :password",Bank.class);
			Bank bank = query.setParameter("username",username).setParameter("password", passward).getSingleResult();
			log.info("customers username is:"+username+"and password is:"+passward);
			return bank;
		}catch(NoResultException ex) {
			
		}
		log.info("get customer process failed...");
		return null;
	}

	@Transactional
	@Override
	public String payemi(long accountNo, double emiAmout) {
		// TODO Auto-generated method stub
		log.info("payemi process successful...");
		try {
			
			Bank bank = entityManger.createQuery("from Bank Where accNo= :accountNo",Bank.class)
					.setParameter("accountNo", accountNo)
					.getSingleResult();
			
			if(bank.getLoanamount()< emiAmout) {
				return "LOW_LOAN";
			}
			
			int result = entityManger.createQuery("Update Bank set loanamount= :loanAmount where accno= :accountNo")
					.setParameter("loanAmount",bank.getLoanamount()-emiAmout)
					.setParameter("accountNo", accountNo)
					.executeUpdate();
			
			if(result>0) {
				entityManger.createNativeQuery("insert into transaction (account_no,message) values (?,?)")
				.setParameter(1, accountNo)
				.setParameter(2, "Pay a EMI "+emiAmout+" by "+accountNo+" on "+LocalDate.now())
				
				.executeUpdate();
				log.info("paying emi with account no"+accountNo+"emi amount is:"+emiAmout);
				return "OK";
			}
			
		}catch(NoResultException ex) {
			log.info("pay emi process failed...");
			return "ERROR";
		}
	return "";
	}

	@Transactional
	@Override
	public String deposit(long accountNo, double Amount) {
		// TODO Auto-generated method stub
		log.info("deposit process successful...");
		try {
			Query query = entityManger.createQuery("from Bank where accNo= :accountNo",Bank.class);
			Bank bank=(Bank) query.setParameter("accountNo", accountNo).getSingleResult();
			
			int result = entityManger.createQuery("Update Bank set balance= :balance where accno= :accountNo")
							.setParameter("balance", Amount+bank.getBalance())
							.setParameter("accountNo", accountNo)
							.executeUpdate();
			if(result>0) {
				entityManger.createNativeQuery("insert into transaction (account_no,message) values (?,?)")
				.setParameter(1, accountNo)
				.setParameter(2, "Deposite "+Amount+" In "+accountNo+" on "+LocalDate.now())
				.executeUpdate();
				log.info("depositing amount for account no"+accountNo+"and amount is:"+Amount);
				return "OK";
			}
		}catch(NoResultException ex) {
			log.info("deposit process failed...");
			return "ERROR";
		}
		return "";
	}

	@Transactional
	@Override
	public String foreClose(long accountNo) {
		// TODO Auto-generated method stub
		log.info("foreclose process successful...");
		try {
			
			Bank bank = entityManger.createQuery("from Bank Where accNo= :accountNo",Bank.class)
					.setParameter("accountNo", accountNo)
					.getSingleResult();
			
			if(bank.getLoanamount()==0l)
				return "NO_LOAN";
			else if(bank.getBalance()>bank.getLoanamount()) {
				
				double newBal = bank.getBalance()-bank.getLoanamount();
				entityManger.createQuery("update Bank set loanamount= :loanAmount,balance= :newBal where accNo= :accountNo")
				.setParameter("loanAmount", 0.0d)
				.setParameter("newBal", newBal)
				.setParameter("accountNo", accountNo)
				.executeUpdate();
				
//				Transaction Detail
				entityManger.createNativeQuery("insert into transaction (account_no,message) values (?,?)")
				.setParameter(1, accountNo)
				.setParameter(2, "ForeClose the Loan of"+accountNo+" on "+LocalDate.now())
				.executeUpdate();
				log.info("foreclosing account with account no"+accountNo);
				return "OK";
			}
			else
				return "LOW_BALANCE";
			
		}catch(NoResultException ex) {
			log.info("foreclose process failed...");
			return "ERROR";
		}
	}

	@Override
	public int calEMI(long loanAmount, int period, int rate) {
		// TODO Auto-generated method stub
		log.info("calEMI process successful ...");
		return (int) ((loanAmount/period)+ (rate/loanAmount)*100);
	}
	@Transactional
	@Override
	
	public List<Transaction> printTransaction(long accountNo) {
		log.info("Retrieve successful ...");	
		
	
	
	try {
		TypedQuery<Transaction> query = entityManger.createQuery("from Transaction where account_no= :accountNo",Transaction.class);
		List<Transaction> transaction = query.setParameter("accountNo", accountNo).getResultList();
		return transaction;
	}catch(NoResultException ex) {
		new BankExpception();
	}
	log.info("Retrieve failed ...");
	return null;
	
	

}

	@Override
	public boolean validateRegister(String phoneno, String email) {
		// TODO Auto-generated method stub
		log.info("Validate register successful ...");
try {
			
			TypedQuery<Bank> query = entityManger.createQuery("from Bank b where b.phoneno= :phoneno and email= :email",Bank.class);
			query.setParameter("phoneno",phoneno).setParameter("email", email).getSingleResult();
			log.info("validating register having phone no"+phoneno+"and email"+email);
			return true;
			
		}catch(NoResultException ex) {
			log.info("Validate register failed ...");
			return false;
		}

	}

	
	
}