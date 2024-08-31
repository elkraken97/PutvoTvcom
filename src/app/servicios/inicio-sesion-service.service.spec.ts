import { TestBed } from '@angular/core/testing';

import { InicioSesionServiceService } from './inicio-sesion-service.service';

describe('InicioSesionServiceService', () => {
  let service: InicioSesionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioSesionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
