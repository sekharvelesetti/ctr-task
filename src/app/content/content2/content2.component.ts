import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface PeriodicElement1 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {position: 1, name: 'P3', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'P1', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'P2', weight: 6.941, symbol: 'Li'},
  
];
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'CTR Delivery', weight:6.00, symbol: '70%'},
  {position: 2, name: 'CTR Filling', weight: 4.00, symbol: '100%'},
  {position: 3, name: 'DART Response Time', weight:30, symbol: '95%'},
  {position: 4, name: 'BerylliuOperation Hours', weight:7, symbol: '60%'},
  {position: 5, name: 'UI Response Time', weight:5, symbol: '90%'}
];



@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight'];
  displayedColumns1: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  constructor() { }

  ngOnInit(): void {
  }

}
