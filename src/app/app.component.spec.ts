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
  it('should render title in a h2 second tag', async(() => {
    expect(de.nativeElement.querySelector('h2.h2Class').textContent).toEqual('my name is neung');
  }));
  // h2.h2Class is hello_world so it's absolutely not equal to hello world
  it('should render title in a h2 second tag', async(() => {
    expect(de.nativeElement.querySelector('h2.h2Class').textContent).not.toEqual('hello world');
  }));
  it('should render neungInput in input tag', async(() => {
    expect(de.nativeElement.querySelector('input').value).toBe('my name is neung');
  }));
  it('should plus 2 number', async(() => {
    const expected: String = 3;
    expect(app.plus(1, 2)).toEqual(expected);
  }));
});
