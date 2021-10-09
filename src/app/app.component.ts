import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'country',
      type: 'autoComplete',
      templateOptions: {
        label: 'Pais',
        placeholder: 'Selecione um pais',
        required: true,
        keyField: 'id',
        labelField: 'name',
        completeMethod: (templateOptions: FormlyTemplateOptions, event: any) => {
          this.countryService.listByName(event.query)
            .subscribe(data => templateOptions.results = data)
        }
      }
    }
  ];

  constructor(private countryService: CountryService) {
  }

}
