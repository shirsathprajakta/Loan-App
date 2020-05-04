import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Accountholder } from 'src/app/model/Accountholder';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-applyloanc',
  templateUrl: './applyloanc.component.html',
  styleUrls: ['./applyloanc.component.css']
})
export class ApplyloancComponent implements OnInit {
  loanForm: FormGroup;
  submitted: boolean = false;
  public Msg;
  constructor(private builder2: FormBuilder, private router: Router, private bankservice: BankserviceService) { }




  ngOnInit() {
    this.loanForm = this.builder2.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],
      accno: new FormControl('', [
        Validators.required,

      ]),

      loanamount: new FormControl('', [
        Validators.required,
      ]),
    })
    
  }

apply()
{
  this.submitted=true;
  if(this.loanForm.invalid){
    return;
  }
  this.bankservice.applyloan(this.loanForm.value.accno,this.loanForm.value.loanamount).subscribe(data=>{
   //this.Msg= "you have successfully applied for a loan of Rs."+this.loanForm.value.loanamount;
   alert("you have successfully applied for a loan of Rs."+this.loanForm.value.loanamount);
  },error=>{
      this.Msg=error;
  })
}
}
