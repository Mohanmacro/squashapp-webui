import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedgender: '0';

  constructor() { }
  changegender(userSelectedGender)
  {
this.selectedgender=userSelectedGender;
  }
  ngOnInit(): void {
  }

}
