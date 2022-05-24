import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres/genres.service';
import { StepsService } from 'src/app/services/steps/steps.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(
    private stepsService: StepsService,
    private genresService: GenresService) {

    }

  ngOnInit(): void {
  }

  addAnotherBook(): void {
    this.stepsService.setStep(1);

    //resetuj vrednosti
    this.genresService.setGenreActive(-1);
    this.genresService.setSubgenres([]);
    this.genresService.setSubgenreActive([]);
    this.genresService.setNewSubgenreActive(false);
  }
}
