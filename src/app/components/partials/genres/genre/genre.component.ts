import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  @Input() name: string = '';


  constructor() {

  }

  ngOnInit(): void {
  }

}
