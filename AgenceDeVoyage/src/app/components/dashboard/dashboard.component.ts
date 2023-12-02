import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { userService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  UsersList: User[];
  subsUser: Subscription
  constructor(private userService: userService, private toaster: ToastrService) { }

  ngOnDestroy(): void {
    this.subsUser.unsubscribe;
  }

  ngOnInit(): void {
    this.userService.getallUsers().subscribe({
      next: (data: User[]) => {
        this.UsersList = data;
      },
      error: (error) => {
        throw error;
      }
    });
  }

  delete(id: number) {
    this.userService.delete(id).subscribe({
      complete: () => {
        this.ngOnInit();
        this.toaster.success('user deleted', 'success')
      },
      error: (err) => {
        throw err;
      }
    });
  }
}