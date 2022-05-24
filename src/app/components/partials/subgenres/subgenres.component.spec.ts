import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgenresComponent } from './subgenres.component';

describe('SubgenresComponent', () => {
  let component: SubgenresComponent;
  let fixture: ComponentFixture<SubgenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
