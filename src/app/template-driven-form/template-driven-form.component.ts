import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
 
  constructor(private commom: CommonService) { }

  ngOnInit(): void {
  }
  public name = '';
  public submitForm(): void{
    // console.log('submit form: name = ' + this.name);
    this.commom.submitData({name: this.name, age: 12});
  }

}
