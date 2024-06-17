import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AtFormNavnRolleComponent } from '../at-form-navn-rolle/navn-rolle.component';
import { MaterialModule } from '../../material-module';

interface Person {
  navn: string;
  rolle: string;
}

const person = {
  navn: 'John',
  rolle: 'CEO',
};

@Component({
  selector: 'app-test-form2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtFormNavnRolleComponent,
    MaterialModule,
  ],
  templateUrl: './test-form2.component.html',
  styleUrl: './test-form2.component.scss',
})
export class TestForm2Component {
  fb: FormBuilder = inject(FormBuilder);

  testForm2: FormGroup = this.fb.group({
    people: this.fb.array([this.createPersonFormGroup(person)]),
  });

  createPersonFormGroup(person: Person): FormGroup {
    return this.fb.group({
      navn: [person.navn, Validators.required],
      rolle: [person.rolle, [Validators.required, Validators.min(0)]],
    });
  }

  get people(): FormArray {
    return this.testForm2.get('people') as FormArray;
  }

  addPerson(person: Person): void {
    this.people.push(this.createPersonFormGroup(person));
  }

  onSubmit(): void {
    if (this.testForm2.invalid) {
      console.log('Formularen er ugyldig.');

      return;
    }
    console.log('Form valid. Value:', this.testForm2.value);
  }

  onClick(): void {
    this.addPerson(person);
  }
}
