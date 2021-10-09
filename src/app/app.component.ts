import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { subscribeToResult } from 'rxjs/internal-compatibility';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Country, CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({});
  model: any;
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
        completeMethod: (templateOptions: FormlyTemplateOptions, $event: any) => {
          this.countryService.listByName($event.query)
            .pipe(
              debounceTime(500),
              distinctUntilChanged(),
            )
            .subscribe(data => templateOptions.results = data)
        }
      }
    }
  ];

  constructor(private countryService: CountryService) {
    this.model = {country: this.countryService.countries[0]};
  }

  onSubmit() {
    console.log({...this.model});
  }

}
