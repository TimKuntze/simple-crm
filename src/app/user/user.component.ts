import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();
  birthDate = new Date();

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog() {
    let dialog = this.dialog.open(DialogAddUserComponent);
    dialog.afterClosed().subscribe(() => {
      this.birthDate = dialog.componentInstance.birthDate;
    });
  }

}
