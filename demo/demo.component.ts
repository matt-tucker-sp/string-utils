import {Component, Inject} from '@angular/core';
import {StringUtilsService} from '../src';

@Component({
  selector: 'demo-app',
  template: '{{spaceString}} converts to {{convert(spaceString)}}'
})
export class Demo {
    public spaceString: string;
    private stringUtils: StringUtilsService;

    constructor(@Inject(StringUtilsService) stringUtils: StringUtilsService) {
        this.spaceString = 'This Is A TEST';
        this.stringUtils = stringUtils;
    }

    public convert(original: string) : string {
        return this.stringUtils.convertToUnderscoreCase(original);
    }
}
