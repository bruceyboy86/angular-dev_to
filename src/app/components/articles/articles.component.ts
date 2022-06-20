import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IArticles } from 'src/app/modals/modals';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  constructor(private http: HttpService) {}
  articles: IArticles[] = [];

  ngOnInit(): void {
    this.http.getArticles().subscribe((res) => {
      this.articles = res;
    });
  }
}
