import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, OnChanges {

  @Input() name = '';
  public icon: any;

  public icons = [
    {
      name: 'standby',
      // tslint:disable-next-line: max-line-length
      svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12A7,7 0 0,1 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z" /></svg>'
    },
    {
      name: 'settings',
      // tslint:disable-next-line: max-line-length
      svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>'
    },
    {
      name: 'minimize',
      // tslint:disable-next-line: max-line-length
      svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20,14H4V10H20" /></svg>'
    },
    {
      name: 'maximize',
      // tslint:disable-next-line: max-line-length
      svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4,4H20V20H4V4M6,8V18H18V8H6Z" /></svg>'
    },
    {
      name: 'downsize',
      // tslint:disable-next-line: max-line-length
      svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z" /></svg>'
    },
    {
      name: 'close',
      // tslint:disable-next-line: max-line-length
      svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getIcon();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name && changes.name.currentValue !== changes.name.previousValue) {
      this.name = changes.name.currentValue;
      this.getIcon();
    }
  }

  getIcon(): void {
    const ic = this.icons.filter(i => i.name === this.name);
    this.icon = ic.length === 1 ? ic[0].svg : null;
  }

}
