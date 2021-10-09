import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-auto-complete-formly',
  templateUrl: './auto-complete-formly.component.html',
  styleUrls: ['./auto-complete-formly.component.scss']
})
export class AutoCompleteFormlyComponent extends FieldType {

  get toFormControl(): FormControl {
    return this.formControl as FormControl;
  }
}
