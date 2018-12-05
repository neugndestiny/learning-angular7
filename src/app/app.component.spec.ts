import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { FormsModule } from '../../node_modules/@angular/forms';
import { DebugElement } from '../../node_modules/@angular/core';
describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ]
    }).compileComponents();
  }));
  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Hello World'`, async(() => {
    expect(app.title).toEqual('Hello World');
  }));
  it('should render title in a h1 tag', async(() => {
    expect(de.nativeElement.querySelector('h1').textContent).toEqual('Hello World');
  }));
});
