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
import { printErrors } from '../../utils/print-errors.util';

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
})
export class TestForm2Component {
  fb: FormBuilder = inject(FormBuilder);

  testForm2: FormGroup = this.fb.group({
    people: this.fb.array([this.createPersonFormGroup(person)]),
  });

  createPersonFormGroup(person: Person): FormGroup {
    return this.fb.group({
      navn: [person.navn, Validators.required],
      rolle: [person.rolle, [Validators.required, Validators.maxLength(5)]],
    });
  }

  get people(): FormArray {
    return this.testForm2.get('people') as FormArray;
  }

  addPerson(person: Person): void {
    this.people.push(this.createPersonFormGroup(person), { emitEvent: false });
  }

  onSubmit(): void {
    if (this.people.invalid) {
      console.log('Formularen er ugyldig.');
      printErrors(this.testForm2);
      return;
    }
    console.log('Form valid. Value:', this.people.value);
  }

  onClick(): void {
    this.addPerson(person);
  }

  addEmptyJohn(): void {
    this.addPerson({ navn: '', rolle: '' });
  }
}
