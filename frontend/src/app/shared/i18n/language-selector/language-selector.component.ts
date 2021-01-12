import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import {languages} from '../languages.model'
import {I18nService} from "../i18n.service";

@Component({
  selector: 'sa-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {

  public languages: Array<any>;
  public currentLanguage: any;
  data_exnteso?
  clock=""
  clockHandle;
  vagas_aux;
  vagas = "";
  disponivel = "";

  constructor(private i18n: I18nService) {

  }

  ngOnInit() {

    this.languages = languages;
    this.currentLanguage = this.i18n.currentLanguage;

  }

  setLanguage(language){
    this.currentLanguage = language;
    this.i18n.setLanguage(language)
  }

}
