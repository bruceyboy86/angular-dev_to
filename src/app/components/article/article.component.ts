import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}
  article: any;
  // id: string | null;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.getArticle(id).subscribe((res) => {
      this.article = res;
    });
  }
}
