import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GenresService } from '../genres/genres.service';
import { SubgenresService } from '../subgenres/subgenres.service';

@Injectable({
  providedIn: 'root'
})
export class NewSubgenreFormService implements OnDestroy {

  public form: FormGroup;
  public chosenSubgenres: any[] = [];
  public chosenSubgenresSubscription: Subscription;
  public subgenres: any[] = [];
  public subgenresSubscription: Subscription;
  public subgenreActive: any[] = [];
  public subgenreActiveSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private genresService: GenresService,
    private subgenresService: SubgenresService
  ) {
    this.form = this.formBuilder.group(this.getFormElements());
    this.chosenSubgenresSubscription = this.genresService.getSubgenres().subscribe((val: any) => {
      this.chosenSubgenres = val;
    })
    this.subgenresSubscription = this.subgenresService.getSubgenres().subscribe((val: any) => {
      this.subgenres = val;
    })
    this.subgenreActiveSubscription = this.genresService.getSubgenreActive().subscribe((val: any[]) => {
      this.subgenreActive = val;
    })
  }

  ngOnDestroy(): void {
    this.subgenreActiveSubscription.unsubscribe();
    this.chosenSubgenresSubscription.unsubscribe();
    this.subgenresSubscription.unsubscribe();
  }
  public get f() {
    return this.form.controls;
  }

  public getFormElements(): Object {
    return {
      name: ['', Validators.required],
      isDescriptionRequired: [false]
    }
  }

  public submitNewSubgenre() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      //kreiraj id
      const id = this.subgenres[this.subgenres.length - 1].id + 1;

      //dodaj u izabrane
      this.chosenSubgenres.push({
        id: id,
        name: this.form.value.name,
        isDescriptionRequired: this.form.value.isDescriptionRequired
      });
      this.genresService.setSubgenres(this.chosenSubgenres);

      //dodaj u listu svih
      this.subgenres.push({
        id: id,
        name: this.form.value.name,
        isDescriptionRequired: this.form.value.isDescriptionRequired
      });
      this.subgenresService.setSubgenres(this.subgenres)

      //dodaj active klasu
      this.subgenreActive.push(id - 1);

      //reset form nakon submit-a
      this.form.reset();
    }
  }

  public getFormReference() {
    return this.form;
  }

}
