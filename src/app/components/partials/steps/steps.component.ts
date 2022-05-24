import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenresService } from 'src/app/services/genres/genres.service';
import { StepsService } from 'src/app/services/steps/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit, OnDestroy {

  public stepActive: number = 1;
  public stepSubscription: Subscription;
  public stepHasBeenThree: boolean = false;


  public genresSubscription: Subscription;
  public newSubgenreActive: boolean = false;
  steps: any[] = [
    {
      id: 1,
      val: 1,
      name: "Genre",
      whenDotsShow: true
    },
    {
      id: 2,
      val: 2,
      name: "Subgenre",
      whenDotsShow: true
    },
    {
      id: 3,
      val: '3',
      name: "Add new subgenre",
      whenDotsShow: false,
      addNewSubgenreShow: false
    },
    {
      id: 4,
      val: '3',
      name: "Information",
      whenDotsShow: false
    }
  ]
  constructor(private stepsService: StepsService, private genresService: GenresService) {
    this.stepSubscription = this.stepsService.getStep().subscribe((val: any) => {
      this.stepActive = val;

      // prikazi step 3 ili step 3 i 4 ako je trenutni korak 3
      if (this.stepActive > 2) {
        this.steps.forEach((el: any) => {
          el.whenDotsShow = true
        })
      } else {
        this.steps[2].whenDotsShow = false;
        this.steps[3].whenDotsShow = false;
      }
    })

    this.genresSubscription = this.genresService.getNewSubgenreActive().subscribe((val: boolean) => {
      this.newSubgenreActive = val;
      if (this.newSubgenreActive === true) {
        this.steps[2].addNewSubgenreShow = true;
        this.steps[2].val = 3;
        this.steps[3].val = 4;
      } else {
        this.steps[2].addNewSubgenreShow = false;
        this.steps[3].val = 3;
      }
    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stepSubscription.unsubscribe();
    this.genresSubscription.unsubscribe();
  }
}
