import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {

  registerForm: FormGroup;
  submitted = false;
  users: any[] = [];

  isEditMode = false;
  editIndex: number = -1;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    if (this.isEditMode) {
      // Update existing user
      this.users[this.editIndex] = this.registerForm.value;
      this.isEditMode = false;
      this.editIndex = -1;
    } else {
      // Add new user
      this.users.push(this.registerForm.value);
    }

    this.registerForm.reset();
    this.submitted = false;
  }

  editUser(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    this.registerForm.patchValue(this.users[index]);
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);

    if (index === this.editIndex) {
      this.cancelEdit(); // Clear form if user being edited is deleted
    }
  }

  cancelEdit() {
    this.isEditMode = false;
    this.editIndex = -1;
    this.registerForm.reset();
    this.submitted = false;
  }
}