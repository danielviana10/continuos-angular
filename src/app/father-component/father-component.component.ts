import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.css']
})
export class FatherComponentComponent {

  lastName: string = 'Uzumaki';

  showFullName(entireName: Event) {
    alert(`The entire name is: ${entireName}`);
  }
}
