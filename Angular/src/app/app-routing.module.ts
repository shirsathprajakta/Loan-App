import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
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

const routes: Routes = [
  {path:'',component:HomeComponent},
 {path:'register',component:RegisterComponent},
{path:'home',component:HomeComponent},
{path:'functions',component:FunctionsComponent},
{path:'applyloan',component:ApplyloancComponent},
{path:'balancee',component:BalanceComponent},
{path:'payemi',component:PayemiComponent},
{path:'foreclose',component:ForecloseComponent},
{path:'deposit',component:DepositComponent},
{path:'calcemi',component:CalcemiComponent},
{path:'ptransactions',component:PtransactionsComponent},
{path:'about',component:AboutComponent},
{path:'contactus',component:ContactusComponent},
{path:'navbar',component:NavBarComponent},
{path:'print',component:PrinttComponent},
{path:'showtrans/:trans',component:PrinttransComponent},
{path:'printbal/:bal',component:PrintbalComponent},
//{path:'**',component:FunctionsComponent},
{path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
