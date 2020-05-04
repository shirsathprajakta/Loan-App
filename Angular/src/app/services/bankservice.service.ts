import { Injectable } from '@angular/core';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Accountholder} from '../model/Accountholder';
//import { Http, Response } from "@angular/http";
//import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../model/Transaction';
// const httpOptions={
//   headers: new HttpHeaders({'Content-Type':'application/json'})
// };
@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

 // constructor(private http:Http) { }
 constructor(private http:HttpClient) { }
  // getAllUser()
  // {
  //   return this.http.get('/server/loan/create');
  // }
private userUrl='/server/loan';

    public save(user:Accountholder)
    {
      console.log(user);
       return this.http.post(this.userUrl+"/create",user,{responseType:'text'});
     
     }
    // public save(user:Accountholder):Promise<Array<Accountholder>>
    // {
    //   console.log(user);
    //   let empHeaders=new Headers({'Content-Type':'application/json'});
      
    //    return this.http.post(this.userUrl+"/create",JSON.stringify(user),{headers:empHeaders})
    //    .toPromise()
    //    .then(response=>response.json() as Accountholder[])
    //    .catch(this.handleError);
     
    //  }
public applyloan(accno:number,loanamount:number)
{
  return this.http.put(this.userUrl+"/applyLoan?"+'accountNo='+accno+'&loanAmount='+loanamount,new Accountholder,{responseType:'text'})
  .catch(this.errHandle);
}


public balance1(accno:number)
{
  return this.http.get(this.userUrl+"/balance?"+'accountNo='+accno,{responseType:'text'})
  .catch(this.errHandle);
} 

public payemii(accno:number,emiamount:number)
{
  return this.http.put(this.userUrl+"/payEmi?"+'accountNo='+accno+'&emiAmount='+emiamount,new Accountholder,{responseType:'text'})
  .catch(this.errHandle);
}
public login(username:string,password:string)
{
  return this.http.get(this.userUrl+"/validateUser?"+'username='+username+'&password='+password,{responseType:'text'})
  .catch(this.errHandle);

}
public forelose(accno:number)
{
return this.http.put(this.userUrl+"/foreClose?"+'accountNo='+accno,new Accountholder,{responseType:'text'})
.catch(this.errHandle);
}
public calcEMI(loanamount:number,rate:number,period:number)
{
  return this.http.get(this.userUrl+"/calcEmi?"+'amount='+loanamount+'&period='+period+'&rate='+rate,{responseType:'text'})
  .catch(this.errHandle);
}
public deposit(accno:number,amount:number)
{
  return this.http.put(this.userUrl+"/deposit?"+'accountNo='+accno+'&amount='+amount,new Accountholder,{responseType:'text'})
  .catch(this.errHandle);
}
public validateregister(phoneno:string,email:string)
{
  return this.http.get(this.userUrl+"/validateRegister?"+'phoneno='+phoneno+'&email='+email,{responseType:'text'})
  .catch(this.errHandle);
}
// public transaction(accno:number)
// {
//   return this.http.get(this.userUrl+"/printTransaction?"+'accountNo='+accno,{responseType:'text'});
// }
public transaction(accountNo:number)
{
  return this.http.get<Transaction>(this.userUrl+"/printTransaction?"+'accountNo='+accountNo);
}

errHandle(error : HttpErrorResponse){
  return Observable.throw(error.error);
}
}
