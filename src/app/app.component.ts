import { Component, ViewChild } from '@angular/core';
import { HelloButton } from 'my-super-compoments-yee/dist/types/components/button/button';
import { TestUser } from 'my-super-compoments-yee/dist/types/components/modal/TestUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  btnTitle = 'btn title';

  showModal = false;

  user: TestUser;

  @ViewChild('sharedBtn') sharedBtn: HelloButton;

  clickSharedButton(e: CustomEvent) {
    console.log('test click', e);
    this.showModal = true;
    this.sharedBtn.fixedName = 'name is changed!!!!';
    this.btnTitle = 'NEW';
  }

  openChange(e: CustomEvent) {
    console.log(1111, e);
    this.showModal = e.detail;
    this.user.age = 1;
  }

}
