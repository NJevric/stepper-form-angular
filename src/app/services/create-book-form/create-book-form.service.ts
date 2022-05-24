import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/interfaces/i-book';
import { ISubgenre } from 'src/app/interfaces/i-subgenre';
import { GenresService } from '../genres/genres.service';

@Injectable({
  providedIn: 'root'
})
export class CreateBookFormService implements OnDestroy {

  public authors: any[] = [
    {
      id: 1,
      name: 'Nikola Jevric'
    },
    {
      id: 2,
      name: 'Petar Petrovic'
    }
  ]

  public publishers: any[] = [
    {
      id: 1,
      name: 'Nikola izdavastvo'
    },
    {
      id: 2,
      name: 'Beograd izdavastvo'
    }
  ]
  public formats: any[] = [
    {
      id: 1,
      name: 'format 1'
    },
    {
      id: 2,
      name: 'format 2'
    }
  ]
  public langs: any[] = [
    {
      id: 1,
      name: 'Serbian'
    },
    {
      id: 2,
      name: 'English'
    }
  ]

  public form: FormGroup;
  public genre: Object = {};
  public genreSubscription: Subscription;

  public subgenresChosen: Array<ISubgenre> = []
  public subgenresChosenSubscription: Subscription;

  public book: IBook = {
    title: '',
    author: 1,
    isbn: '',
    publisher: 1,
    date: '',
    pageNum: 0,
    format: 1,
    edition: '',
    lang: 1,
    description: '',
    genre: {},
    subgenres: []
  };

  constructor(
    private formBuilder: FormBuilder,
    private genresService: GenresService
  ) {
    this.form = this.formBuilder.group(this.getFormElements());
    this.genreSubscription = this.genresService.getGenre().subscribe((val: string) => {
      this.genre = val;
    })
    this.subgenresChosenSubscription = this.genresService.getSubgenres().subscribe((val: any[]) => {
      this.subgenresChosen = val;
    })
  }

  ngOnDestroy(): void {
    this.genreSubscription.unsubscribe();
    this.subgenresChosenSubscription.unsubscribe();
  }
  public get f() {
    return this.form.controls;
  }

  public getFormElements(): Object {
    return {
      title: ['', Validators.required],
      author: [this.authors[0].id, Validators.required],
      isbn: ['', Validators.required],
      publisher: [this.publishers[0].id, Validators.required],
      date: ['', Validators.required],
      pageNum: ['', Validators.required],
      format: [this.formats[0].id, Validators.required],
      edition: ['', Validators.required],
      lang: [this.langs[0].id, Validators.required],
      description: ['']
    }
  }

  public submitBook() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.book = {
        title: this.form.value.title,
        author: this.form.value.author,
        isbn: this.form.value.isbn,
        publisher: this.form.value.publisher,
        date: this.form.value.date,
        pageNum: this.form.value.pageNum,
        format: this.form.value.format,
        edition: this.form.value.edition,
        lang: this.form.value.lang,
        description: this.form.value.description,
        genre: this.genre,
        subgenres: this.subgenresChosen
      };
      console.log(this.book);
      this.form.reset();
    }
  }

  public getFormReference() {
    return this.form;
  }
}
