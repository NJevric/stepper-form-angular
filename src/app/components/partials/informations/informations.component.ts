import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateBookFormService } from 'src/app/services/create-book-form/create-book-form.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  public authors: any[] = []
  public publishers: any[] = []
  public formats: any[] = []
  public langs: any[] = []

  form: FormGroup;

  constructor(private createBookFormService: CreateBookFormService) {

    this.authors = this.createBookFormService.authors;
    this.publishers = this.createBookFormService.publishers;
    this.formats = this.createBookFormService.formats;
    this.langs = this.createBookFormService.langs;

    this.form = this.createBookFormService.getFormReference();
  }

  ngOnInit(): void {
  }

  submitBook() {
    this.createBookFormService.submitBook();
  }
}
