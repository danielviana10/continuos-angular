import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component {

  name: string = '';

  constructor(private logger: LoggerService) {
  }

  addName() {
    this.logger.login(`The name ${this.name} was added`);
  }
}
