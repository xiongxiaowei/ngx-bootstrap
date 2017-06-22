import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.css']
})
export class SortableComponent implements OnInit {
   public itemStringsLeft: any[] = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];
 
  public itemStringsRight: any[] = [
    'Mr. O',
    'Tomato'
  ];
  constructor() { }

  ngOnInit() {
  }

}
