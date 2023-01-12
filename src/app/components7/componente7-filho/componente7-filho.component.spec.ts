import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente7FilhoComponent } from './componente7-filho.component';

describe('Componente7FilhoComponent', () => {
  let component: Componente7FilhoComponent;
  let fixture: ComponentFixture<Componente7FilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente7FilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente7FilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
