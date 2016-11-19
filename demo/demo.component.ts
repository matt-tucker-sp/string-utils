import {Component, Inject} from '@angular/core';
import {StringUtilService} from '../src/string-util.service';

@Component({
  selector: 'demo-app',
  template: '{{spaceString}} converts to {{convert(spaceString)}}'
})
export class Demo {
    public spaceString: String;
    private stringUtilService: StringUtilService;

    constructor(@Inject(StringUtilService) stringUtilService) { 
        this.spaceString = "This Is A Test"
        this.stringUtilService = stringUtilService;
    }

    public convert(original) : String {
        return this.stringUtilService.convertToUnderscoreCase(original);
    }
}
