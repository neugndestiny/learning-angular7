import { TestBed } from '@angular/core/testing';

import { TestServiceService } from './test-service.service';
import { HttpClientModule, HttpClient } from '../../../node_modules/@angular/common/http';
import { AppComponent } from '../app.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { Account } from '../shared/interfaces/account.interface';

describe('TestServiceService', () => {
  let service: TestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:  [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    service = TestBed.get(TestServiceService);
    expect(service).toBeTruthy();
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getUser().subscribe(value => {
      expect(typeof value).toBe('object');
      done();
    });
  });
});
