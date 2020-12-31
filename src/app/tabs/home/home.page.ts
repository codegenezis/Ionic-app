import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  articles;
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
  };

  constructor(private apiservice: ApiService,
              private inappbrowser: InAppBrowser) { }

  ionViewDidEnter(){

    this.apiservice.getNews().subscribe((data) => {
      console.log("Extracted data is",data);
      this.articles = data['articles'];
    });

  }

  openurl(res){
    var detailurl:string = res;
    console.log("detailed url",detailurl);
    // const browser = this.inappbrowser.create(detailurl, '_self', {location:'no'});
    const browser = this.inappbrowser.create(detailurl, '_self', this.options);
  }
}
