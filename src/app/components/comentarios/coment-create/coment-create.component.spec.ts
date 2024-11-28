import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentCreateComponent } from './coment-create.component';

describe('ComentCreateComponent', () => {
  let component: ComentCreateComponent;
  let fixture: ComponentFixture<ComentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
