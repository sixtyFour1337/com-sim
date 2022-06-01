import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'safe'
})
export class SafePipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
        switch (type) {
            case 'resourceUrl':
            case undefined:
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            default:
                throw new Error(`Unable to bypass secrurity for invalid type: ${type}`);
        }
    }
}
