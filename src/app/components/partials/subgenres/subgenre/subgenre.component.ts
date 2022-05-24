import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subgenre',
  templateUrl: './subgenre.component.html',
  styleUrls: ['./subgenre.component.scss']
})
export class SubgenreComponent implements OnInit {

  @Input() name:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
