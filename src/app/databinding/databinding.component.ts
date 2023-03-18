import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  status='success';
  serverPort=8084;
  serverNo:number=20;
  serverProtocol:string='https://';
  allowNewServer=true;
  message='No Server Found!'
  textVal='Enter any string'
  flag=false;
  constructor() { 
setTimeout(() => {
  this.allowNewServer=false
}, 5000);
  }

  /*ngOnInit(): void {
  }
  */
 createServer(){
  this.flag=true
  this.message='Server is created. Server name is '+this.textVal
 }

 getServerHostName(){
  return this.serverProtocol+'github.com';
 }

 onUpdateServer(event:any){
  console.log(event);
  this.textVal=event.target.value;
//if we don't use any, we need to typecast value to <HTMLInputElement> eg (<HTMLInputElement>event.target).value
 }
}
