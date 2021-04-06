import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/core/Services/video-service.service';
import { take,first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TagSearcher';

  public videos = [];

  constructor(private videoService: VideoService){}

  ngOnInit(){
    this.videoService
        .getVideosWithTags()
        .pipe(
          first()
        )
        .subscribe(
          (videos) => this.videos = videos,
          (error) => console.log("Error occured"),
          () => console.log("finished.")
        );
  }

  handleLink(link: string){
    window.open(link, "_blank");
  }
}
