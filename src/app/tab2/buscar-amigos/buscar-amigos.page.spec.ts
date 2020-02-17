import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarAmigosPage } from './buscar-amigos.page';

describe('BuscarAmigosPage', () => {
  let component: BuscarAmigosPage;
  let fixture: ComponentFixture<BuscarAmigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAmigosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarAmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
