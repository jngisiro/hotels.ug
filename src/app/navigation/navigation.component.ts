import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  hotelname: string = "Sheraton Hotel"
  hotelLocation: string = "Kampala"

  constructor() { }

  ngOnInit() {
  }

}
