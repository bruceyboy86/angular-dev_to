import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(private http: HttpService) {}
  article: any;
  // @Input() id: Number;
  ngOnInit(): void {
    // this.http.getArticle(id).subscribe((res) => {
    //   this.article = res;
    // });
  }
}
