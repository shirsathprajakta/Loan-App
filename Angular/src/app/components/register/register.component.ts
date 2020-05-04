import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Accountholder } from 'src/app/model/Accountholder';
import { Observable } from 'rxjs/Observable';
import { $, error } from 'protractor';
//import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //  registerForm:FormGroup;
  //submitted:boolean=false;
  //users:Accountholder[];
  // user:Accountholder;
  user: Accountholder;
  accholder: Accountholder = new Accountholder();
  registerForm: FormGroup;
  submitted: boolean = false;
  validMessage: string = "";
  isAccount:string;
  constructor(private builder1: FormBuilder, private router: Router, private bankservice: BankserviceService) {
    //this.user=new Accountholder();
  }

  ngOnInit() {

    this.registerForm = this.builder1.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],

      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),


      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
         Validators.maxLength(15),
         Validators.pattern('^[a-z_-]{3,15}$')
      ]),


      phoneno: new FormControl('', [
        Validators.required,
        
        Validators.minLength(8),  
      Validators.maxLength(12),  

         Validators.pattern('[7-9][0-9]{9}')
      ]),

      password: new FormControl('', [
        Validators.required,
         Validators.minLength(6),
         Validators.maxLength(15),
         Validators.pattern('((?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,15})')
      ]),




      //password:['',Validators.required],
     // balance: ['', Validators.required],
      balance: new FormControl('', [
        Validators.required,
        Validators.min(100000),
        //Validators.max(100),
        Validators.pattern("[0-9]+")
        //CustomValidator.patternValidator(/[A-Za-z]/,{hasLetters:true})
        
       // Validators.pattern([0-9]),
        // Validators.minLength(5),
        // Validators.maxLength(80),
        // Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      
      
      //email:['',Validators.required],

      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
         Validators.maxLength(80),
         Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),


      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(100),
        Validators.pattern("[0-9]+")
        //CustomValidator.patternValidator(/[A-Za-z]/,{hasLetters:true})
        
       // Validators.pattern([0-9]),
        // Validators.minLength(5),
        // Validators.maxLength(80),
        // Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),


    })
  }

  onsubmit() {

    this.submitted = true;
console.log(this.registerForm.invalid)
    //console.log(this.registerForm.errors.onsubmit)
    if (this.registerForm.invalid) {
       return;
     }
   
    
    this.bankservice.validateregister(this.registerForm.value.phoneno, this.registerForm.value.email).subscribe(data => {
     
      if(data=="true"){
        alert("Account already exists")
     }

    },
    error => {
       if(error=="false"){
        this.bankservice.save(this.registerForm.value).subscribe(data1 => {
          alert(data1);
          console.log(data1);
          
        }) 
       }else{
        alert("Accout Not created");
       }
      
    })
    // this.submitted=true;


    // this.bankservice.save(this.registerForm.value).subscribe(data=>{


    //     alert("Registered successfully..");

    //)}
  }
   
  


  

}



