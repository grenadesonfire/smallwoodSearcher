import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos : VideoInfo[] = 
    [
      {
        Title: 'Zorro\'s Horse Once Went On A Quest To Find Him (Movie Horses and Buck Tooth Taylor)',
        Description: 'Dogs are normally cited as the most loyal of companions but Tornado, Zorro\'s trusty steed, would certainly give them a run for their money.',
        UploadDate: 'Jan 30, 2019',
        Link: 'https://www.youtube.com/watch?v=pXo7ePnHjRw',
        Tags: [
          'zorro',
          'quarantine',
        ]
      },
      {
        Title: 'That Time Jackie Chan Admitted to Liking Equine Gentleman\'s Special Interest Literature (REISSUE)',
        Description: 'Jackie Chan is [REDACTED] so it comes as a surprise then that [REDACTED] and even [REDACTED] horses. Yep.',
        UploadDate: 'Jan 30, 2019',
        Link: 'https://www.youtube.com/watch?v=Ik5d2MVNl_Q',
        Tags: [
          'reupload',
          'jackie chan',
          'horse'
        ]
      },
      {
        Title: 'Gipsy Danger from Pacific Rim was Based on John Wayne (Adam Sandler Movies)',
        Description: 'Pacific Rim 2 will be hitting theatres in a week, so let\'s take a look back at the movie which started it all. Pacific Rim has it all; robots, monsters  and, of course, John Wayne.',
        UploadDate: 'Jan 30, 2019',
        Link: 'https://www.youtube.com/watch?v=9Jrbg2jNWlg',
        Tags: [
          'Pacific Rim', 'John Wayne', 'Adam Sandler'
        ]
      },
      {
        Title: 'They Deliberately Made Bumblebee Look Like Trash in Transformers (Shia LaBeouf yelling at skeletons)',
        Description: 'Over a decade before he starred in his own movie, Bumblebee first appeared in theatres as an old Camaro... but not just any old Camaro. One that had to look as much like trash as possible.',
        Link: 'https://www.youtube.com/watch?v=eVO7gjB1Lio',
        UploadDate: 'Jan 30, 2019',
        Tags: [
          'Transformers',
          'test'
        ]
      }
    ];

  constructor() { }

  public getVideosWithTags() : Observable<VideoInfo[]> {
    return of(this.videos);
  }
}

export interface VideoInfo {
  Title: string;
  Description: string;
  UploadDate: Date | string;
  Link: string;
  Tags: string[]
}
