import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {


  Properties: Array<any> = [{
    "Id": 1,
    "Name": "Villa",
    "Type": "Apartment",
    "Price": 1000
  },
  {
    "Id": 2,
    "Name": "Anegelos",
    "Type": "House",
    "Price": 14000
  },
  {
    "Id": 3,
    "Name": "Cali",
    "Type": "Apartment",
    "Price": 5000
  },
  {
    "Id": 4,
    "Name": "Van",
    "Type": "Apartment",
    "Price": 7000
  },
  {
    "Id": 5,
    "Name": "Coq",
    "Type": "Apartment",
    "Price": 6000
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
