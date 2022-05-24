import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryFormComponent } from './components/library-form/library-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StepsComponent } from './components/partials/steps/steps.component';
import { StepComponent } from './components/partials/steps/step/step.component';
import { GenreComponent } from './components/partials/genres/genre/genre.component';
import { GenresComponent } from './components/partials/genres/genres.component';
import { ButtonsComponent } from './components/partials/buttons/buttons.component';
import { ButtonComponent } from './components/partials/buttons/button/button.component';
import { SubgenresComponent } from './components/partials/subgenres/subgenres.component';
import { SubgenreComponent } from './components/partials/subgenres/subgenre/subgenre.component';
import { NewSubgenreComponent } from './components/partials/new-subgenre/new-subgenre.component';
import { InformationsComponent } from './components/partials/informations/informations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/partials/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryFormComponent,
    StepsComponent,
    StepComponent,
    GenreComponent,
    GenresComponent,
    ButtonsComponent,
    ButtonComponent,
    SubgenresComponent,
    SubgenreComponent,
    NewSubgenreComponent,
    InformationsComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
