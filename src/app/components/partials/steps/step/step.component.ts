import { Component, Input, OnInit } from '@angular/core';
import { StepsService } from 'src/app/services/steps/steps.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() val:number = 0;
  @Input() name:string = '';
  @Input() active:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
