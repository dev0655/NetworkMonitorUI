import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Host } from './host';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'NetworkMonitor';
  users: Host[]=[];
  iptables: String[]=[];
  dataRefresher: any;
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(){
    this.getAllHosts();
    this.refreshData();
  }

  getAllHosts(){
    this.http.get<Host[]>("http://localhost:8080/NetworkMonitor/api/getAllHosts").subscribe(
      data=>{
        
        console.log("Here");
        this.users=data;
      }
      
    );
  }

  getIptables(host:String){
    this.http.get<String[]>("http://localhost:8080/NetworkMonitor/api/iptables/"+host).subscribe(
      data=>{
        
        console.log("Here");
        this.iptables=data;
      }
    );
  }

  refreshData(){
    this.dataRefresher =
      setInterval(() => {
        this.getAllHosts();
      }, 6000);  
  }

  ngOnDestroy(){
    this.users=[];
    this.iptables=[];
  }
 
 

}
