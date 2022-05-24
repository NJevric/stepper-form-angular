import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenresService } from 'src/app/services/genres/genres.service';
import { NewSubgenreFormService } from 'src/app/services/new-subgenre-form/new-subgenre-form.service';

@Component({
  selector: 'app-new-subgenre',
  templateUrl: './new-subgenre.component.html',
  styleUrls: ['./new-subgenre.component.scss']
})
export class NewSubgenreComponent implements OnInit {

  form: FormGroup;
  subgenresChosen: any = [];

  constructor(private newSubgenreFormService: NewSubgenreFormService) {
    this.form = this.newSubgenreFormService.getFormReference();
  }

  ngOnInit(): void {
  }

  submitNewSubgenre() {
    this.newSubgenreFormService.submitNewSubgenre();

  }

}
