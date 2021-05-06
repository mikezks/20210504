import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { validateCity, validateCityWithParams } from '../../../shared/validation/validate-city';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  showDetails: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [0],
      from: ['Amsterdam', [
        Validators.required,
        Validators.minLength(3),
        validateCity
      ]],
      to: ['Madrid', [
        Validators.required,
        Validators.minLength(3),
        validateCityWithParams([
          'Graz', 'Rome', 'Oslo'
        ])
      ]],
      date: [new Date()]
    });

    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get('id');
        this.showDetails = params.get('showDetails') === 'true';
        this.editForm.patchValue({
          id: this.id
        })
      });

    this.editForm.valueChanges.pipe(
        debounceTime(300)
      ).subscribe(console.log);

    console.log('onInit');
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
