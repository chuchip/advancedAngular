import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonaDetailComponent } from './pesona-detail.component';

describe('PesonaDetailComponent', () => {
  let component: PesonaDetailComponent;
  let fixture: ComponentFixture<PesonaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesonaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesonaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
