import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenresService } from 'src/app/services/genres/genres.service';
import { SubgenresService } from 'src/app/services/subgenres/subgenres.service';

@Component({
  selector: 'app-subgenres',
  templateUrl: './subgenres.component.html',
  styleUrls: ['./subgenres.component.scss']
})
export class SubgenresComponent implements OnInit, OnDestroy {

  public subgenres: any[] = [];
  public subgenresAllSubscription: Subscription;

  public subgenresChosen: any[] = [];

  public subgenreActive: any[] = [];
  public subgenreSubscription: Subscription;

  newSubgenreActive: boolean = false;
  newSubgenreSubscription: Subscription;

  constructor(
    private genresService: GenresService,
    private subgenresService: SubgenresService
  ) {
    this.subgenresAllSubscription = this.subgenresService.getSubgenres().subscribe((response: any) => {
      this.subgenres = response;
    })
    this.subgenreSubscription = this.genresService.getSubgenreActive().subscribe((val: any[]) => {
      this.subgenreActive = val;
    })
    this.newSubgenreSubscription = this.genresService.getNewSubgenreActive().subscribe((val: boolean) => {
      this.newSubgenreActive = val;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subgenreSubscription.unsubscribe();
    this.newSubgenreSubscription.unsubscribe();
    this.subgenresAllSubscription.unsubscribe();
  }

  chooseSubgenre(index: number, id: number) {
    //ako je vec izabran izbrisi iz niza

    if (this.subgenreActive.includes(index)) {
      //  nadji index izabranog izabranog elementa iz niza
      const i = this.subgenreActive.indexOf(index);
      //izbrisi ga iz niza
      this.subgenresChosen.splice(this.subgenresChosen.findIndex(i => i.id === id), 1)
      this.subgenreActive.splice(i, 1);
    }

    //upisi u niz
    else {
      //setuj active
      this.subgenreActive.push(index);
      //upisi objekat u niz
      this.subgenresChosen.push(this.subgenres[index])
    }
    //setuj finalni niz
    this.genresService.setSubgenreActive(this.subgenreActive);
    this.genresService.setSubgenres(this.subgenresChosen);

  }

  addNewSubgenre(): void {
    this.newSubgenreActive == true ? this.genresService.setNewSubgenreActive(false) : this.genresService.setNewSubgenreActive(true)
  }
}
