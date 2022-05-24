import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenresService } from 'src/app/services/genres/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit, OnDestroy {

  public genre: any;
  public genreActive: number = -1;
  public genres: any[] = [];

  public genresAllSubscription: Subscription;
  public genreActiveSubscription: Subscription;

  constructor(
    private genresService: GenresService
  ) {
    this.genresAllSubscription = this.genresService.getAll().subscribe((data: any) => {
      this.genres = data.genres;
    })
    this.genreActiveSubscription = this.genresService.getGenreActive().subscribe((val: number) => {
      this.genreActive = val;
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.genresAllSubscription.unsubscribe();
    this.genreActiveSubscription.unsubscribe();
  }

  public chooseGenre(index: number) {
    this.genre = {
      id: this.genres[index].id,
      name: this.genres[index].name
    };
    this.genresService.setGenre(this.genre);
    this.genresService.setGenreActive(index);
  }
}
