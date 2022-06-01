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
