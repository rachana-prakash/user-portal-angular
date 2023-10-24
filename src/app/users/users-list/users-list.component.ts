import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  displayedColumns = ['name', 'email', 'username', 'phone'];
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
  }
}
