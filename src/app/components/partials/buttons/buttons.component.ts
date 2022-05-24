import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateBookFormService } from 'src/app/services/create-book-form/create-book-form.service';
import { DisableBtnService } from 'src/app/services/disable-btn/disable-btn.service';
import { GenresService } from 'src/app/services/genres/genres.service';
import { NewSubgenreFormService } from 'src/app/services/new-subgenre-form/new-subgenre-form.service';
import { StepsService } from 'src/app/services/steps/steps.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit, OnDestroy {

  step: number = 1;
  genreActive: number = -1;
  subgenreActive: any = [];
  newSubgenreActive: boolean = false;

  public disableBtn: boolean = true;
  disableBtnSubscription: Subscription;

  formNewSubgenre: FormGroup;
  formBookInfo: FormGroup;

  constructor(
    private genresService: GenresService,
    private stepsService: StepsService,
    private newSubgenreFormService: NewSubgenreFormService,
    private createBookFormService: CreateBookFormService,
    private disableBtnService: DisableBtnService
  ) {

    this.disableBtnSubscription = this.disableBtnService.getDisableBtn().subscribe((val: boolean) => {
      this.disableBtn = val;

    })
    this.stepsService.getStep().subscribe((val: number) => {
      this.step = val
      if (this.step == 1) {
        this.genresService.getGenreActive().subscribe((val: number) => {
          this.genreActive = val;
          this.genreActive !== -1 ? this.disableBtnService.setDisableBtn(false) : this.disableBtnService.setDisableBtn(true);
        })
        return;
      }
      if (this.step == 2) {
        this.disableNextStep();
        return;
      }
      if (this.step === 3 && this.newSubgenreActive === true) {
        this.formNewSubgenre.invalid ? this.disableBtnService.setDisableBtn(true) : this.disableBtnService.setDisableBtn(false)
        return;
      }
      if ((this.step === 3 && this.newSubgenreActive !== true) || (this.step === 4 && this.newSubgenreActive === true)) {
        this.formBookInfo.invalid ? this.disableBtnService.setDisableBtn(true) : this.disableBtnService.setDisableBtn(false)
        return;
      }
    })
    this.formNewSubgenre = this.newSubgenreFormService.getFormReference();
    this.formBookInfo = this.createBookFormService.getFormReference();

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.disableBtnSubscription.unsubscribe();
  }

  goBack(): void {
    this.stepsService.setStep(--this.step);
  }

  disableNextStep() {
    this.genresService.getNewSubgenreActive().subscribe((val: boolean) => {
      this.newSubgenreActive = val;
      this.newSubgenreActive === false && this.subgenreActive.length === 0 ? this.disableBtnService.setDisableBtn(true) : this.disableBtnService.setDisableBtn(false);
    })
    this.genresService.getSubgenreActive().subscribe((val: any[]) => {
      this.subgenreActive.length === 0 && this.newSubgenreActive === false ? this.disableBtnService.setDisableBtn(true) : this.disableBtnService.setDisableBtn(false);
      this.subgenreActive = val;
    })
  }
  submitNewSubgenre() {
    this.newSubgenreFormService.submitNewSubgenre();
  }

  submitBookInfo() {
    this.createBookFormService.submitBook();
  }

  next(): void {
    if (this.step === 3 && this.newSubgenreActive === true) {
      this.submitNewSubgenre();
    }
    if (this.step === 3 && !this.newSubgenreActive === true || this.step === 4 && this.newSubgenreActive === true) {
      this.submitBookInfo();
    }
    this.stepsService.setStep(++this.step);
  }

}
