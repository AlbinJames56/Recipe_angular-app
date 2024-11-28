import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { emit } from 'process';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  demoMail: String = 'abc@gmail.com';
  testimonyForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.testimonyForm = this.fb.group({
      name: [''],
      email: [''],
      message: [''],
    });
  }

  submitTestimony() {
    const name = this.testimonyForm.value.name;
    const email = this.testimonyForm.value.email;
    const message = this.testimonyForm.value.message;
    if (name && email && message) {
      this.api
        .saveTestimonialsAPI({ name, email, message })
        .subscribe((res: any) => {
          alert('Thankyou for your testimony');
          this.testimonyForm.reset();
        });
    } else {
      alert('Please fill missing fields');
    }
  }
}
