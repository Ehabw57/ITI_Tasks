import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUser } from '../../Models/iuser';
import { UserApi } from '../../Services/user-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regestration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-registration.html',
  styleUrls: ['./user-registration.css'],
})
export class Registration {
  registrationForm!: FormGroup;

  constructor(
    private userApi: UserApi,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.registrationForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phones: this.fb.array([this.generatePhoneInput()]),
    });
  }

  private generatePhoneInput(): FormGroup {
    return this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
    });
  }

  get phones(): FormArray {
    return this.registrationForm.get('phones') as FormArray;
  }

  get fullname() {
    return this.registrationForm.get('fullname');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  addPhoneNumber(): void {
    this.phones.push(this.generatePhoneInput());
  }

  removePhoneNumber(index: number): void {
    if (this.phones.length > 1) {
      this.phones.removeAt(index);
    }
  }

  canRemovePhone(index: number): boolean {
    return this.phones.length > 1 && index > 0;
  }

  getPhoneControl(index: number) {
    return this.phones.at(index).get('number');
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const phoneNumbers = this.phones.value.map((phone: any) => parseInt(phone.number));

      const userData: IUser = {
        fullname: this.registrationForm.value.fullname,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        phone: phoneNumbers,
      };

      this.userApi.createUser(userData).subscribe((data) => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      });
    }
  }
}
