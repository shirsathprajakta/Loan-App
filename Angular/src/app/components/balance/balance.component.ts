import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Accountholder } from 'src/app/model/Accountholder';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balForm: FormGroup;
  submitted: boolean = false;
  bal:string;
  constructor(private builder3: FormBuilder, private router: Router, private bankservice: BankserviceService) { }

  ngOnInit() {
    this.balForm = this.builder3.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],
      accno: new FormControl('', [
        Validators.required,
      ]),

      
    })
  }
Balance()
{
  this.submitted=true; 
 
  this.bankservice.balance1(this.balForm.value.accno).subscribe(data=>{
    console.log(data);
    this.bal=data;
    let balancee=data;
    localStorage.balance=balancee;
    //this.router.navigate('[/]');
    this.router.navigate(['printbal',this.bal]);
    console.log( this.router.navigate(['printbal',this.bal])) 
    alert("your Balance is:"+data);
  },error => {
    this.bal=error;
  
  })

}

}
