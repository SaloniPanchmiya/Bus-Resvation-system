
import { Bus } from './admin/Bus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) { }

  getbus(){
    return this.http.get<Bus[]>("http://localhost:9091/UserApp/Bus/");
  }
  addbus(bus:Bus){
    return this.http.post("http://localhost:9091/UserApp/Bus/", bus);
  }

  updateBus(bus:Bus) {
    return this.http.put("http://localhost:9091/UserApp/Bus/", bus);
  }

  deleteBus(id: number, date:string) {
    return this.http.delete("http://localhost:9091/UserApp/Bus/"  + id + '/' + date);
  }

  removeBus(bus:Bus,id:number, date:string){
    return this.http.put("http://localhost:9091/UserApp/Bus/"+'/'+id, bus);
  }
  
  getbusbyFromToDate(from: string, to: string, dt: string){
    return this.http.get<Bus[]>("http://localhost:9091/UserApp/Bus"+from+'/'+to+'/'+dt);
    
  }
}
