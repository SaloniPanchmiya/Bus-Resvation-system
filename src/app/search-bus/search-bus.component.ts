import { BusService } from './../bus.service';
import { Bus } from './../admin/Bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {
  
  from:string = sessionStorage.getItem('source');
  to:string = sessionStorage.getItem('dest');
  depDate:string = sessionStorage.getItem('date');
  buses:Bus[] = new Array();
  busId:number;
  bus:Bus[];
  
  //latest_date =this.datepipe.transform(this.depDate, 'dd-MM-YYYY');
  constructor(private service:BusService) {}

  ngOnInit(): void {
    // alert(sessionStorage.getItem('source'));
    // alert(sessionStorage.getItem('dest'));
    // alert(sessionStorage.getItem('date'));
    this.service.getbusbyFromToDate(this.from,this.to,this.depDate).subscribe(data => {
      this.buses = data;
    });
    
  }
}
