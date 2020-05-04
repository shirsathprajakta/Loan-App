import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Accountholder } from 'src/app/model/Accountholder';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-payemi',
  templateUrl: './payemi.component.html',
  styleUrls: ['./payemi.component.css']
})
export class PayemiComponent implements OnInit {
  emiForm: FormGroup;
  submitted: boolean = false;
  Msg;
  constructor(private builder: FormBuilder, private router: Router, private bankservice: BankserviceService) { }

  ngOnInit() {

    this.emiForm = this.builder.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],
      accno: new FormControl('', [
        Validators.required,
      ]),

      emiamount: new FormControl('', [
        Validators.required,
      ]),
    })
    
  }
Pay()
{
  this.submitted=true;
  this.bankservice.payemii(this.emiForm.value.accno,this.emiForm.value.emiamount).subscribe(data=>{
    console.log(data);
   // this.Msg="you have successfully paid emi of Rs."+this.emiForm.value.emiamount;
   alert("you have successfully paid emi of Rs."+this.emiForm.value.emiamount);
  },err=>{
    this.Msg=err;
  })
}


}
