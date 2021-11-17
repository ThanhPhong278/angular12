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
  public mycolor = 'red';
  public districts: string[] = ['Quận huyện'];
  public VietNamData = [
    {city: 'Chọn thành phố', district: ['Quận huyện'] },
  {
    city: 'An Giang', 
    district: [
      'Thành phố Long Xuyên',
      'Thành phố Châu Đốc',
      'Thị xã Tân Châu',
      'Huyện An Phú',
      'Huyện Châu Phú',
      'Huyện Châu Thành',
      'Huyện Chợ Mới',
      'Huyện Phú Tân',
      'Huyện Thoại Sơn',
      'Huyện Tịnh Biên',
      'Huyện Tri Tôn'
    ],
  },
  {
    city: 'Bà Rịa - Vũng Tàu', 
    district: [
      'Thành phố Vũng Tàu',
      'Thị xã Bà Rịa',
      'Thị xã Phú Mỹ',
      'Huyện Châu Đức',
      'Huyện Côn Đảo',
      'Huyện Đất Đỏ',
      'Huyện Long Điền',
      'Huyện Tân Thành',
      'Huyện Xuyên Mộc'
    ],
  },
  {
    city: 'Bạc Liêu', 
    district: [
      'Thành phố Bạc Liêu',
      'Huyện Đông Hải',
      'Huyện Giá Rai',
      'Huyện Hòa Bình',
      'Huyện Hồng Dân',
      'Huyện Phước Long',
      'Huyện Vĩnh Lợi'
    ],
  },
];
  constructor() { }

  public  ngOnInit(): void {
    console.log('trai cay= ', this.TraiCay2);
    console.log('cities= ', this.VietNamData);
  }
  public changeCity(event: any): void{
    const city = event.target.value;
    if(!city){
      return;
    }
    //cách 1
    // const search = this.VietNamData.filter(data=>data.city===city);
    // console.log('search', search);
    // if(search && search.length>0){
    //   this.districts = search[0].districts;

    //cách 2
    this.districts = this.VietNamData.find((data)=>data.city===city)?.district|| [];
    }
  }


