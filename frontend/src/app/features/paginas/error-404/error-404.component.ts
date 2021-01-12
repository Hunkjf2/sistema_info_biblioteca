import { Component, OnInit , ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NotificationService } from '@app/core/services';

@Component({
  selector: 'sa-error-404',
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.css'],
  providers: [MessageService,NotificationService]
})
export class Error404Component implements OnInit {

  constructor(
      private modalService: BsModalService,
      private messageService: MessageService,
      private formBuilder: FormBuilder,
      private router: Router,
      private notificationService: NotificationService
      ) { }

  ngOnInit() {

  }




}
  
