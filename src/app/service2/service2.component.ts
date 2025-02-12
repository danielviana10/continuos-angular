import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component {

  description: string = '';

  constructor(public logger: LoggerService) {}

  addProduct(){
    this.logger.login(`The name of the product ${this.description} was added`);
  }
}
