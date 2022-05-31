import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BootService } from 'src/app/providers/boot.service';

@Component({
  selector: 'app-start-logo-screen',
  templateUrl: './start-logo-screen.component.html',
  styleUrls: ['./start-logo-screen.component.scss']
})
export class StartLogoScreenComponent implements OnInit {
  width = 0;

  constructor(private router: Router, private bootService: BootService) {}

  ngOnInit(): void {
    if (!this.bootService.getStartScreenFinished()) {
      const interval = setInterval(() => {
        console.log('width', this.width);
        if (this.width === 100) {
          clearInterval(interval);
          this.bootService.setStartScreenFinished(true);
          this.router.navigate(['/desktop']);
        } else {
          this.width += 10;
        }
      }, 500);
    } else {
      this.router.navigate(['/desktop']);
    }
  }

}
