import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GenresService } from 'src/app/services/genres/genres.service';
import { StepsService } from 'src/app/services/steps/steps.service';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit, OnDestroy {

  public stepActive: number = 0;
  public stepSubscription: Subscription;

  public newSubgenreActive: boolean = false;
  public newSubgerne:Subscription;


  constructor(private stepsService: StepsService, private genresService: GenresService) {
    this.stepSubscription = this.stepsService.getStep().subscribe((val: number) => {
      this.stepActive = val;
    })

    this.newSubgerne = this.genresService.getNewSubgenreActive().subscribe((val: boolean) => {
      this.newSubgenreActive = val;
    })


  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.stepSubscription.unsubscribe();
    this.newSubgerne.unsubscribe();
  }

}
