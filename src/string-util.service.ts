import { Injectable } from '@angular/core';

@Injectable()
export class StringUtilService {

    /**
     * Convert the given string to 'dash case'. Replace spaces with dashes and replace upper case
     * with lower case plus preceding dash
     * @param {String} original The original string
     * @returns {String} Dash-case string
     */
     public convertToDashCase(original: string): string {
         return this.convertToCase(original, '-');
     }

    /**
     * Convert the given string to 'underscore case'. Replace spaces with underscores and replace upper case
     * with lower case plus preceding underscore
     * @param {String} original The original string
     * @returns {String} Underscore-case string
     */
     public convertToUnderscoreCase(original: string): string {
         return this.convertToCase(original, '_');
     }

    /**
     * @private
     *
     * Convert the given string, using replaceChar in lieu of spaces and camel casing.
     */
     private convertToCase(original: string, replaceChar: string): string {
         // Use RegExp so we can make a regex out of our parameter
         let duplicateRegex: RegExp = new RegExp(replaceChar + '+', 'g');
         // Replace spaces with replaceChar
         return original.replace(/ /g, replaceChar).
         // Replace upper case with lower case preceded by replaceChar, unless first position
         replace(/([A-Z])/g,
             function($1: string, p1: string, offset: number): string {
                 var str: string = $1.toLowerCase();
                 return (offset === 0) ? str : replaceChar + str;
             }).
         // Remove any duplicate replaceChars
         replace(duplicateRegex, replaceChar);
     }
 }
