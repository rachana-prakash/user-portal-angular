import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsListComponent } from './albums-list/albums-list.component';

@NgModule({
  declarations: [AlbumsListComponent],
  exports: [AlbumsListComponent],
  imports: [CommonModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
