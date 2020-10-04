import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  users: User;
  delete: boolean;
  errMess: string;

  constructor(private userService: UserService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users,
        errmess => this.errMess = <any>errmess);
  }

}
