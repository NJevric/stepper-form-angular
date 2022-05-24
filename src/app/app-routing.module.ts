import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryFormComponent } from './components/library-form/library-form.component';


const routes: Routes = [
  {
    path:'',
    component:LibraryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
