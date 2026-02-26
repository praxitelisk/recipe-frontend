import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header'; // Προσοχή στο όνομα της κλάσης

describe('HeaderComponent', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Εφόσον το component είναι standalone, το βάζουμε στα imports
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});