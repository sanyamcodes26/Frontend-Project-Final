import { Component } from '@angular/core';
import { by, element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  toggleOn = true;
  toggleOn1 = true;
}

// it('should check ngHide', function() {
//   var checkbox = element(by.model('checked'));
//   var checkElem = element(by.css('.check-element'));
//   var val = true;
//   expect(checkElem.isDisplayed()).toBe(val);
//   checkbox.click();
//   expect(checkElem.isDisplayed()).toBe(val);
// });


