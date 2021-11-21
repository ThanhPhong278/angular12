import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HightLightDirective } from './Directives/hight-light.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetDataComponent } from './get-data/get-data.component';
import { HttpClientModule } from '@angular/common/http' 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnSalePipe,
    PageNotFoundComponentComponent,
    HightLightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
