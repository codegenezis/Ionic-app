import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  articles;

  constructor(private apiservice: ApiService) { }

  ionViewDidEnter(){

    this.apiservice.getNews().subscribe((data) => {
      console.log("Extracted data is",data);
      this.articles = data['articles'];
    });

  }
}
