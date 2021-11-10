import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public TraiCay = ['Táo','Nho','Cam','Xoài','Bưởi'];
  public TraiCay2 = [
    {ten: 'Táo',gia: 12, hagia: true}, 
    {ten: 'Nho',gia: -3, hagia: false},
    {ten: 'Cam',gia: 5, hagia: true},
  ];
  constructor() { }

  public  ngOnInit(): void {
    console.log('trai cay= ', this.TraiCay2);
  }

}
