import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUtenteComponent } from './listar-utente.component';

describe('ListarUtenteComponent', () => {
  let component: ListarUtenteComponent;
  let fixture: ComponentFixture<ListarUtenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUtenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
