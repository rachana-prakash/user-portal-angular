import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'user-portal-angular';
  links = [
    { path: 'users', name: 'Users' },
    { path: 'posts', name: 'Posts' },
    { path: 'albums', name: 'Albums' },
  ];
}
