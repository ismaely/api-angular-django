import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetalheComponent } from './heroes-detalhe.component';

describe('HeroesDetalheComponent', () => {
  let component: HeroesDetalheComponent;
  let fixture: ComponentFixture<HeroesDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
