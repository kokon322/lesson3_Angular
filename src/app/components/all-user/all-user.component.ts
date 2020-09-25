import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../modules/user';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) {
    userService.getAllUsers().subscribe(value => {
      this.users = value;
    });
  }


  ngOnInit(): void {
  }

}
