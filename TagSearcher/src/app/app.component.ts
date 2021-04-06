import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TagSearcher';

  public videos = [
    {
      'title': 'Test1'
    },
    {
      'title': 'Test2'
    }
  ]
}
