import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootScreenComponent } from './boot-screen.component';

describe('BootScreenComponent', () => {
  let component: BootScreenComponent;
  let fixture: ComponentFixture<BootScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
