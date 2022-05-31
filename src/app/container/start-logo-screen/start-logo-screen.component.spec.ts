import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLogoScreenComponent } from './start-logo-screen.component';

describe('StartLogoScreenComponent', () => {
  let component: StartLogoScreenComponent;
  let fixture: ComponentFixture<StartLogoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartLogoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLogoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
