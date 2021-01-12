(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-clientemensalista-clientemensalista-module"],{

/***/ "./src/app/features/clientemensalista/clientemensalista.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/features/clientemensalista/clientemensalista.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NsaWVudGVtZW5zYWxpc3RhL2NsaWVudGVtZW5zYWxpc3RhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/clientemensalista/clientemensalista.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/clientemensalista/clientemensalista.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n      <sa-big-breadcrumbs [items]=\"['Cliente Mensalista']\" icon=\"male\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-sm-12\">\n          <div  class=\"well\">\n                <p-table #dt [columns]=\"cols\" [(selection)]=\"selectedUser\" (onRowSelect)=\"onRowSelect($event)\" [value]=\"usuariodateList\" [paginator]=\"true\" [rows]=\"10\">\n                        <ng-template pTemplate=\"caption\">Lista de Clientes</ng-template>\n                        <ng-template pTemplate=\"caption\">\n                            <div style=\"text-align: right\">\n                                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                                <input type=\"text\" pInputText size=\"50\" placeholder=\"Pesquisar\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n                            </div>\n                        </ng-template>\n                        <ng-template pTemplate=\"summary\" let-rowData>\n                            <div style=\"text-align:left\">\n                                <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"showDialogToAdd();\" label=\"Cadasrar Cliente\"></button>\n                            </div>\n                        </ng-template>\n                        <ng-template pTemplate=\"header\" let-columns>\n                            <tr>\n                                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                    {{col.header}}\n                                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                                </th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-cliente let-columns=\"columns\">\n                            <tr [pSelectableRow]=\"usuario\">\n                                <td>{{cliente.id}}</td>\n                                <td>{{cliente.nome }}</td>\n                                <td>{{cliente.email}}</td>\n                                <td>{{cliente.cpf}}</td>\n                                <td>{{cliente.rua}}</td>\n                                <td>{{cliente.bairro}}</td>\n                                <td>{{cliente.cidade}}</td>\n                                <td>{{cliente.UF}}</td>\n                                <td>{{cliente.cep}}</td>\n                                <!-- <td>{{cliente.veiculos.placa}}</td> -->\n                                <td>{{cliente.valor_mensalidade}}</td>\n                                <td>{{cliente.data_vencimento | date:\"dd/MM/yyyy\"}}</td>\n                                <td>{{cliente.created_at | date:\"dd/MM/yyyy\"}}</td>\n                                <td>\n                                    <button type=\"button\" label=\"Editar\" pButton icon=\"fa fa-edit\"></button>\n                                </td>\n                                <td>\n                                    <button label=\"Deletar\" class=\"ui-button-rounded ui-button-danger\" type=\"button\" pButton icon=\"fa fa-edit\"></button>\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </p-table>\n                    \n                    <!-- CRIAR CLIENTE -->\n                    <p-dialog header=\"Cadastrar Cliente\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"500\">\n                            <div class=\"ui-g ui-fluid\" *ngIf=\"cliente\">\n                                <form [formGroup]=\"formulario\" (ngSubmit)=\"criar()\">\n                                    <div class=\"ui-g-12\">\n                                        <div class=\"ui-g-4\">\n                                            <label for=\"name\">Nome</label>\n                                        </div>\n                                        <div class=\"ui-g-8\">\n                                            <input type=\"text\" formControlName=\"name\" placeholder=\"Nome\" name=\"name\" class=\"form-control\" id=\"name\">\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                        <div class=\"ui-g-4\">\n                                            <label for=\"email\">E-Mail</label>\n                                        </div>\n                                        <div class=\"ui-g-8\">\n                                            <input type=\"text\" formControlName=\"email\" placeholder=\"E-mail\" name=\"email\" class=\"form-control\" id=\"email\">\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                        <div class=\"ui-g-4\">\n                                            <label for=\"cpf\">CPF</label>\n                                        </div>\n                                        <div class=\"ui-g-8\">\n                                            <input type=\"text\" formControlName=\"cpf\" placeholder=\"CPF\" name=\"cpf\" class=\"form-control\" id=\"cpf\">\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"senha\">Rua</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                                <input type=\"text\" formControlName=\"rua\" placeholder=\"Rua\" name=\"rua\" class=\"form-control\" id=\"rua\">\n                                            </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"senha\">Bairro</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                                <input type=\"text\" formControlName=\"bairro\" placeholder=\"Bairro\" name=\"bairro\" class=\"form-control\" id=\"bairro\">\n                                            </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"senha\">Cidade</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                                <input type=\"text\" formControlName=\"cidade\" placeholder=\"Cidade\" name=\"cidade\" class=\"form-control\" id=\"cidade\">\n                                            </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"senha\">Estado</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                                    <p-dropdown [options]=\"estados\" formControlName=\"UF\" editable=\"true\" placeholder=\"Selecione Estado\"></p-dropdown>\n                                            </div>\n                                    </div>\n                                    <div>\n                                        <button type=\"submit\" [disabled]=\"formulario.invalid\" pButton icon=\"fa fa-check\" label=\"Save\"></button>\n                                    </div>\n                                </form>\n                            </div>\n                   </p-dialog>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/clientemensalista/clientemensalista.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/clientemensalista/clientemensalista.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClientemensalistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientemensalistaComponent", function() { return ClientemensalistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_clientemesalista_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clientemesalista-info.service */ "./src/app/services/clientemesalista-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientemensalistaComponent = /** @class */ (function () {
    function ClientemensalistaComponent(clienteMensalistaService, formBuilder, router) {
        this.clienteMensalistaService = clienteMensalistaService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.display = false;
        this.display2 = false;
        this.display3 = false;
        this.usuario_user = [];
        this.usuario_edit = [];
        this.cliente = {};
        this.adunit = {};
    }
    ClientemensalistaComponent.prototype.ngOnInit = function () {
        this.getAllUser();
        this.configurarFormulario();
        this.coluna();
        this.cidades();
        this.estado_ufs();
    };
    ClientemensalistaComponent.prototype.getAllUser = function () {
        var _this = this;
        this.clienteMensalistaService.getAllUser().subscribe(function (data) {
            _this.usuariodateList = data;
            console.log(_this.clienteMensalistaService);
        });
    };
    ClientemensalistaComponent.prototype.coluna = function () {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Nome' },
            { field: 'email', header: 'E-Mail' },
            { field: 'cpf', header: 'CPF' },
            { field: 'rua', header: 'Rua' },
            { field: 'bairro', header: 'Bairro' },
            { field: 'cidade', header: 'Cidade' },
            { field: 'UF', header: 'UF' },
            { field: 'cep', header: 'CEP' },
            // { field: 'veiculo', header: 'Placa Veiculo' },
            { field: 'valor_mensalidade', header: 'Valor Da Mensalidade' },
            { field: 'data_vencimento', header: 'Data de Criação' },
            { field: 'created_at', header: 'Data de Vencimento' },
            { field: 'editar', header: 'Editar' },
            { field: 'deletar', header: 'Deletar' }
        ];
    };
    ClientemensalistaComponent.prototype.cidades = function () {
        this.cidades_br = [
            { label: 'Acre', value: 'AC' },
            { label: 'Alogoas', value: 'AL' },
            { label: 'Amapá', value: 'AP' },
            { label: 'Amazonas', value: 'AM' },
            { label: 'Bahia', value: 'BA' },
            { label: 'Ceará', value: 'CE' },
            { label: 'Espírito Santo', value: 'ES' },
            { label: 'Goiás', value: 'GO' },
            { label: 'Maranhão', value: 'MA' },
            { label: 'Mato Grosso', value: 'MT' },
            { label: 'Mato Grosso do Sul', value: 'MS' },
            { label: 'Minas Gerais', value: 'MG' },
            { label: 'Pará', value: 'PA' },
            { label: 'Paraíba', value: 'PB' },
            { label: 'Paraná', value: 'PR' },
            { label: 'Pernambuco', value: 'PE' },
            { label: 'Piauí', value: 'PI' },
            { label: 'Rio de Janeiro', value: 'RJ' },
            { label: 'Rio Grande do Norte', value: 'RN' },
            { label: 'Rio Grande do Sul', value: 'RS' },
            { label: 'Rondônia', value: 'RO' },
            { label: 'Roraima', value: 'RR' },
            { label: 'Santa Catarina', value: 'SC' },
            { label: 'São Paulo', value: 'SP' },
            { label: 'Sergipe', value: 'SE' },
            { label: 'Tocantins', value: 'TO' },
            { label: 'Distrito Federal', value: 'DF' }
        ];
    };
    ClientemensalistaComponent.prototype.estado_ufs = function () {
        this.estados = [
            { label: 'Acre', value: 'AC' },
            { label: 'Alogoas', value: 'AL' },
            { label: 'Amapá', value: 'AP' },
            { label: 'Amazonas', value: 'AM' },
            { label: 'Bahia', value: 'BA' },
            { label: 'Ceará', value: 'CE' },
            { label: 'Espírito Santo', value: 'ES' },
            { label: 'Goiás', value: 'GO' },
            { label: 'Maranhão', value: 'MA' },
            { label: 'Mato Grosso', value: 'MT' },
            { label: 'Mato Grosso do Sul', value: 'MS' },
            { label: 'Minas Gerais', value: 'MG' },
            { label: 'Pará', value: 'PA' },
            { label: 'Paraíba', value: 'PB' },
            { label: 'Paraná', value: 'PR' },
            { label: 'Pernambuco', value: 'PE' },
            { label: 'Piauí', value: 'PI' },
            { label: 'Rio de Janeiro', value: 'RJ' },
            { label: 'Rio Grande do Norte', value: 'RN' },
            { label: 'Rio Grande do Sul', value: 'RS' },
            { label: 'Rondônia', value: 'RO' },
            { label: 'Roraima', value: 'RR' },
            { label: 'Santa Catarina', value: 'SC' },
            { label: 'São Paulo', value: 'SP' },
            { label: 'Sergipe', value: 'SE' },
            { label: 'Tocantins', value: 'TO' },
            { label: 'Distrito Federal', value: 'DF' }
        ];
    };
    ClientemensalistaComponent.prototype.configurarFormulario = function () {
        this.formulario = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cpf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rua: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bairro: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UF: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipo_cliente: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            valor_mensalidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ClientemensalistaComponent.prototype.criar = function () {
        var _this = this;
        this.clienteMensalistaService.criar(this.formulario.value).subscribe(function (data) {
            _this.router.navigate(['usuario']);
            _this.formulario.reset();
            window.location.reload();
        });
    };
    ClientemensalistaComponent.prototype.showDialogToAdd = function () {
        this.display = true;
        this.newCliente = true;
        this.cliente = {};
    };
    ClientemensalistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-clientemensalista',
            template: __webpack_require__(/*! ./clientemensalista.component.html */ "./src/app/features/clientemensalista/clientemensalista.component.html"),
            styles: [__webpack_require__(/*! ./clientemensalista.component.css */ "./src/app/features/clientemensalista/clientemensalista.component.css")]
        }),
        __metadata("design:paramtypes", [_services_clientemesalista_info_service__WEBPACK_IMPORTED_MODULE_3__["ClienteMensalistaInfoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClientemensalistaComponent);
    return ClientemensalistaComponent;
}());



/***/ }),

/***/ "./src/app/features/clientemensalista/clientemensalista.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/clientemensalista/clientemensalista.module.ts ***!
  \************************************************************************/
/*! exports provided: ClienteMensalistaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteMensalistaModule", function() { return ClienteMensalistaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _clientemensalista_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientemensalista.routing */ "./src/app/features/clientemensalista/clientemensalista.routing.ts");
/* harmony import */ var _clientemensalista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientemensalista.component */ "./src/app/features/clientemensalista/clientemensalista.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/datatable */ "./node_modules/primeng/datatable.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_datatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ClienteMensalistaModule = /** @class */ (function () {
    function ClienteMensalistaModule() {
    }
    ClienteMensalistaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clientemensalista_routing__WEBPACK_IMPORTED_MODULE_2__["clientemensalistaRouting"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                primeng_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"]
            ],
            declarations: [_clientemensalista_component__WEBPACK_IMPORTED_MODULE_3__["ClientemensalistaComponent"]]
        })
    ], ClienteMensalistaModule);
    return ClienteMensalistaModule;
}());



/***/ }),

/***/ "./src/app/features/clientemensalista/clientemensalista.routing.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/clientemensalista/clientemensalista.routing.ts ***!
  \*************************************************************************/
/*! exports provided: clientemensalistaRoutes, clientemensalistaRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientemensalistaRoutes", function() { return clientemensalistaRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientemensalistaRouting", function() { return clientemensalistaRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clientemensalista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientemensalista.component */ "./src/app/features/clientemensalista/clientemensalista.component.ts");


var clientemensalistaRoutes = [
    {
        path: '',
        component: _clientemensalista_component__WEBPACK_IMPORTED_MODULE_1__["ClientemensalistaComponent"],
        data: {
            pageTitle: 'Clientemensalista'
        }
    }
];
var clientemensalistaRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(clientemensalistaRoutes);


/***/ })

}]);
//# sourceMappingURL=features-clientemensalista-clientemensalista-module.js.map