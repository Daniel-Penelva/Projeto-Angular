import { TestBed } from '@angular/core/testing';

import { Componente12Service } from './componente12.service';

describe('Componente12Service', () => {
  let service: Componente12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Componente12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
