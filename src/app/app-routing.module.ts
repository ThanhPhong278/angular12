import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
const routes: Routes = [ 
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'templateform', component: TemplateDrivenFormComponent },
  { path: 'Reactiveform', component: ReactiveFormComponent },
  { path: 'GetData', component: GetDataComponent },
  { path: '', component: HomeComponent},
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
