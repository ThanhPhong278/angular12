import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private common: CommonService, private formBuider: FormBuilder) { }
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });
  public formData = this.formBuider.group({
    name: ['' ,Validators.required],
    age: ['', Validators.required],
  })
  public onSubmit(): void{
    // console.log('submit form: formData = ', this.formData.value);
    this.common.submitData(this.formData.value);
  }
  ngOnInit(): void { 
  }

}
