import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubgenreComponent } from './new-subgenre.component';

describe('NewSubgenreComponent', () => {
  let component: NewSubgenreComponent;
  let fixture: ComponentFixture<NewSubgenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubgenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubgenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
