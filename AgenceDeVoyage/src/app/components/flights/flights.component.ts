import { userService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  travelersform: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private userService: userService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.travelersform = this.formbuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(8),
          Validators.minLength(8),
        ]),
      ],
      destination: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  submit() {
    this.userService.create(this.travelersform.value).subscribe({
      complete: () => {
        console.log('done');
        this.toastr.success('Hello world!', 'Toastr fun!');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log('erreur', err);
      },
    });
  }
}
