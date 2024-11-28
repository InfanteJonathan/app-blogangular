import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentDeleteComponent } from './coment-delete.component';

describe('ComentDeleteComponent', () => {
  let component: ComentDeleteComponent;
  let fixture: ComponentFixture<ComentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
