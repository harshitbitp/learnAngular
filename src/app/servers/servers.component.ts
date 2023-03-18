import { Component, OnInit } from '@angular/core';

@Component({
 // selector: 'app-servers',
  selector: '.app-servers',// app servers is used as class in the html template where it is called
  //selector: '[app-servers]', // app servers is used as attribute in the html template where it is called

  //we can also write html code in component.ts file ,if we change templateUrl to template (for multiline html code use backticks ->`)
  //templateUrl: './servers.component.html'  (removed!!)
  template:`
  <h1>hi I am using html and css property from servers.component.ts</h1>
  <app-server></app-server>
  <app-server></app-server>
  `,
  //styleUrls: ['./servers.component.css']  (removed!!)  will be using backticks ` with styles
  styles:[`
  h1{ 
    color:blue;
  }`]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
