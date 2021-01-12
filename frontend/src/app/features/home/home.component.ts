import { Component, OnInit, ɵConsole } from '@angular/core';
import { HomeInfoService } from '@app/services/home-info.service.ts';
import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

declare var Morris:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeInfoService: HomeInfoService) { }

  ngOnInit() {

    
  }


}
