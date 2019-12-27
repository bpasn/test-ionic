import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallPage } from './detall.page';

describe('DetallPage', () => {
  let component: DetallPage;
  let fixture: ComponentFixture<DetallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
