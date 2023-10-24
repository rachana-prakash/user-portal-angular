import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../user';
import { Store } from '@ngxs/store';
import { SetUsers } from 'src/app/store/app.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  displayedColumns = ['name', 'email', 'username', 'phone'];

  constructor(private usersService: UsersService, private store: Store) {}
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.store.dispatch(new SetUsers(users));
      this.users = users;
    });
  }
}
