import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Yến';
  public age = 15;
  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(private common: CommonService) { }

  ngOnInit(): void {
    console.log('Home Component ngOnInit = ', this.common.counter)
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
  public resetName(): void{
      console.log('resetName');
      this.name = '';
  }

}
