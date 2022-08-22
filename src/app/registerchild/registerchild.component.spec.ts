import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterchildComponent } from './registerchild.component';

describe('RegisterchildComponent', () => {
  let component: RegisterchildComponent;
  let fixture: ComponentFixture<RegisterchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
