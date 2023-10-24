import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MatTableModule } from '@angular/material/table';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './services/users.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UsersListComponent, UserDetailComponent],
  exports: [UsersListComponent],
  imports: [CommonModule, UsersRoutingModule, MatTableModule],
  providers: [UsersService],
})
export class UsersModule {}
