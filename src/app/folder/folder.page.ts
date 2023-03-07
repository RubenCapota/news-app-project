import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ArticlesEntity } from '../interfaces/news-response';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  newsList!: ArticlesEntity[] | null | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsApiService: NewsapiService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTopHeadlines();
  }
  getTopHeadlines(){
    this.newsApiService
    .getTopCountryHeadlines('us',this.folder)
    .pipe(map((res)=>res.articles))
    .subscribe((news)=>(this.newsList=news))
  }
}
//test
