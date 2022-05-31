import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BootService } from 'src/app/providers/boot.service';

@Component({
  selector: 'app-boot-screen',
  templateUrl: './boot-screen.component.html',
  styleUrls: ['./boot-screen.component.scss']
})
export class BootScreenComponent implements OnInit {

  firstRunBool = true;
  typingEnd = false;
  displayTexts = [];

  boottextParts = [
    {text: '>booting system...', delay: 3000},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>starting services...', delay: 2000},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>loading user settings...', delay: 1000},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>ERROR! can\'t find user settings', delay: 1000},
    {text: '>loading guest settings...', delay: 1000},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>loading user interface...', delay: 2000},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>', delay: 200},
    {text: '>loading finished!', delay: 1000},
    {text: '>Welcome Stranger', delay: 1000},
  ];

  constructor(private router: Router, private bootService: BootService) { }

  ngOnInit(): void {
    if (!this.bootService.getBootScreenFinished()) {
      this.firstRun();
    } else {
      this.router.navigate(['/startlogoscreen']);
    }
  }

  typewriter(text: string, i: number, fnCallback: any, delay: number, index: number): void {
    this.typingEnd = false;
    if (i < (text.length)) {
      this.displayTexts[index].text += text[i];

      setTimeout(() => {
        this.typewriter(text, ++i, fnCallback, delay, index);
      }, 100);
    } else if (typeof fnCallback === 'function') {
      this.typingEnd = true;
      setTimeout(fnCallback, delay);
    }
  }

  firstRun(): void {
    if (this.firstRunBool) {
      this.typingEnd = true;
      setTimeout(() => {
        this.firstRunBool = false;
        this.typingEnd = false;
        this.startTextAnimation(0);
      }, 3500);
    }
  }

  startTextAnimation(i: number): void {
    if (typeof this.boottextParts[i] === 'undefined') {
      this.bootService.setBootScreenFinished(true);
      this.router.navigate(['/startlogoscreen']);
    } else if (i < this.boottextParts.length) {
      this.displayTexts.push({text: '', finished: false});
      if (i > 0) {
        this.displayTexts[i - 1].finished = true;
      }
      this.typewriter(this.boottextParts[i].text, 0, () => {
        this.startTextAnimation(++i);
      }, this.boottextParts[i].delay, i);
    }
  }

}
