import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  names:string[]=[];
  personName='';
  constructor() { }

  ngOnInit(): void {
  }

  addName(){
    this.names.push(this.personName);
  }

}
