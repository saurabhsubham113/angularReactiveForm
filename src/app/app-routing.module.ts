import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
    {path:'sign-up',component:SignUpComponent},
    {path:'details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
