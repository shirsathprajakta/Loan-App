import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgKnifeModule } from 'ng-knife'; 
import {BankserviceService} from './services/bankservice.service';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FunctionsComponent } from './components/functions/functions.component';
import { ApplyloancComponent } from './components/applyloanc/applyloanc.component';
import { BalanceComponent } from './components/balance/balance.component';
import { PayemiComponent } from './components/payemi/payemi.component';
import { ForecloseComponent } from './components/foreclose/foreclose.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { CalcemiComponent } from './components/calcemi/calcemi.component';
import { PtransactionsComponent } from './components/ptransactions/ptransactions.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PrinttComponent } from './components/printt/printt.component';
import { PrintbalComponent } from './components/printbal/printbal.component';
import { PrinttransComponent } from './components/printtrans/printtrans.component';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
 
    RegisterComponent,
 
   
 
    FunctionsComponent,
 
   
 
    ApplyloancComponent,
 
   
 
    BalanceComponent,
 
   
 
    PayemiComponent,
 
   
 
    ForecloseComponent,
 
   
 
    DepositComponent,
 
   
 
    CalcemiComponent,
 
   
 
    PtransactionsComponent,
 
   
 
    AboutComponent,
 
   
 
    ContactusComponent,
 
   
 
    NavBarComponent,
 
   
 
    PrinttComponent,
 
   
 
    PrintbalComponent,
 
   
 
    PrinttransComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgKnifeModule   
  ],
  providers: [BankserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
