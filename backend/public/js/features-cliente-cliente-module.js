(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-cliente-cliente-module"],{

/***/ "./src/app/features/cliente/cliente.component.css":
/*!********************************************************!*\
  !*** ./src/app/features/cliente/cliente.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NsaWVudGUvY2xpZW50ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/cliente/cliente.component.html":
/*!*********************************************************!*\
  !*** ./src/app/features/cliente/cliente.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n      <sa-big-breadcrumbs [items]=\"['Cliente Normal']\" icon=\"male\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-sm-12\">\n          <div  class=\"well\">\n                <p-table #dt [columns]=\"cols\" [(selection)]=\"selectedUser\" (onRowSelect)=\"onRowSelect($event)\" [value]=\"usuariodateList\" [paginator]=\"true\" [rows]=\"10\">\n                        <ng-template pTemplate=\"caption\">Lista de Clientes</ng-template>\n                        <ng-template pTemplate=\"caption\">\n                            <div style=\"text-align: right\">\n                                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                                <input type=\"text\" pInputText size=\"50\" placeholder=\"Pesquisar\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n                            </div>\n                        </ng-template>\n                        <ng-template pTemplate=\"summary\" let-rowData>\n                            <div style=\"text-align:left\">\n                                <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"showDialogToAdd();\" label=\"Cadasrar Cliente\"></button>\n                            </div>\n                        </ng-template>\n                        <ng-template pTemplate=\"header\" let-columns>\n                            <tr>\n                                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                    {{col.header}}\n                                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                                </th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-cliente let-columns=\"columns\">\n                            <tr [pSelectableRow]=\"usuario\">\n                                <td>{{cliente.id}}</td>\n                                <td>{{cliente.nome }}</td>\n                                <td>{{cliente.email}}</td>\n                                <td>{{cliente.cpf}}</td>\n                                <td>{{cliente.rua}}</td>\n                                <td>{{cliente.bairro}}</td>\n                                <td>{{cliente.cidade}}</td>\n                                <td>{{cliente.UF}}</td>\n                                <td>{{cliente.cep}}</td>\n                                <td>{{cliente.created_at | date:\"dd/MM/yyyy\"}}</td>\n                                <td>\n                                    <button type=\"button\" label=\"Editar\" pButton icon=\"fa fa-edit\"></button>\n                                </td>\n                                <td>\n                                    <button label=\"Deletar\" class=\"ui-button-rounded ui-button-danger\" type=\"button\" pButton icon=\"fa fa-edit\"></button>\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </p-table>\n                    \n                    <!-- CRIAR CLIENTE -->\n                    <p-dialog header=\"Cadastrar Cliente\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"500\">\n                            <div class=\"ui-g ui-fluid\" *ngIf=\"cliente\">\n                                <form [formGroup]=\"formulario\" (ngSubmit)=\"criar()\">\n                                    <div class=\"ui-g-12\">\n                                        <div class=\"ui-g-4\">\n                                            <label for=\"name\">Nome</label>\n                                        </div>\n                                        <div class=\"ui-g-8\">\n                                            <input type=\"text\" formControlName=\"name\" placeholder=\"Nome\" name=\"name\" class=\"form-control\" id=\"name\">\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                        <div class=\"ui-g-4\">\n                                            <label for=\"email\">E-Mail</label>\n                                        </div>\n                                        <div class=\"ui-g-8\">\n                                            <input type=\"text\" formControlName=\"email\" placeholder=\"E-mail\" name=\"email\" class=\"form-control\" id=\"email\">\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                        <div class=\"ui-g-4\">\n                                            <label for=\"cpf\">CPF</label>\n                                        </div>\n                                        <div class=\"ui-g-8\">\n                                            <input type=\"text\" formControlName=\"cpf\" placeholder=\"CPF\" name=\"cpf\" class=\"form-control\" id=\"cpf\">\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"senha\">Rua</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                                <input type=\"text\" formControlName=\"rua\" placeholder=\"Rua\" name=\"rua\" class=\"form-control\" id=\"rua\">\n                                            </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"senha\">Bairro</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                                <input type=\"text\" formControlName=\"bairro\" placeholder=\"Bairro\" name=\"bairro\" class=\"form-control\" id=\"bairro\">\n                                            </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"senha\">Cidade</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                                <input type=\"text\" formControlName=\"cidade\" placeholder=\"Cidade\" name=\"cidade\" class=\"form-control\" id=\"cidade\">\n                                            </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"senha\">Estado</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                                    <p-dropdown [options]=\"estados\" formControlName=\"UF\" editable=\"true\" placeholder=\"Selecione Estado\"></p-dropdown>\n                                            </div>\n                                    </div>\n                                    <div>\n                                        <button type=\"submit\" [disabled]=\"formulario.invalid\" pButton icon=\"fa fa-check\" label=\"Save\"></button>\n                                    </div>\n                                </form>\n                            </div>\n                   </p-dialog>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/cliente/cliente.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/cliente/cliente.component.ts ***!
  \*******************************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cliente_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cliente-info.service */ "./src/app/services/cliente-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteComponent = /** @class */ (function () {
    function ClienteComponent(clienteService, formBuilder, router) {
        this.clienteService = clienteService;
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
    ClienteComponent.prototype.ngOnInit = function () {
        this.getAllUser();
        this.configurarFormulario();
        this.estado_ufs();
        this.coluna();
        this.cidades();
    };
    ClienteComponent.prototype.coluna = function () {
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
            { field: 'created_at', header: 'Data de Criação' },
            { field: 'editar', header: 'Editar' },
            { field: 'deletar', header: 'Deletar' }
        ];
    };
    ClienteComponent.prototype.cidades = function () {
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
    ClienteComponent.prototype.estado_ufs = function () {
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
    ClienteComponent.prototype.getAllUser = function () {
        var _this = this;
        this.clienteService.getAllUser().subscribe(function (data) {
            _this.usuariodateList = data;
            console.log(_this.usuariodateList);
        });
    };
    ClienteComponent.prototype.configurarFormulario = function () {
        this.formulario = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cpf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rua: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bairro: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            UF: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipo_cliente: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valor_mensalidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ClienteComponent.prototype.criar = function () {
        var _this = this;
        this.clienteService.criar(this.formulario.value).subscribe(function (data) {
            _this.router.navigate(['usuario']);
            _this.formulario.reset();
            window.location.reload();
        });
    };
    ClienteComponent.prototype.showDialogToAdd = function () {
        this.display = true;
        this.newCliente = true;
        this.cliente = {};
    };
    ClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-cliente',
            template: __webpack_require__(/*! ./cliente.component.html */ "./src/app/features/cliente/cliente.component.html"),
            styles: [__webpack_require__(/*! ./cliente.component.css */ "./src/app/features/cliente/cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cliente_info_service__WEBPACK_IMPORTED_MODULE_3__["ClienteInfoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "./src/app/features/cliente/cliente.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/cliente/cliente.module.ts ***!
  \****************************************************/
/*! exports provided: ClienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModule", function() { return ClienteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cliente_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente.routing */ "./src/app/features/cliente/cliente.routing.ts");
/* harmony import */ var _cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente.component */ "./src/app/features/cliente/cliente.component.ts");
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












var ClienteModule = /** @class */ (function () {
    function ClienteModule() {
    }
    ClienteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cliente_routing__WEBPACK_IMPORTED_MODULE_2__["clienteRouting"],
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
            declarations: [_cliente_component__WEBPACK_IMPORTED_MODULE_3__["ClienteComponent"]]
        })
    ], ClienteModule);
    return ClienteModule;
}());



/***/ }),

/***/ "./src/app/features/cliente/cliente.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/cliente/cliente.routing.ts ***!
  \*****************************************************/
/*! exports provided: clienteRoutes, clienteRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clienteRoutes", function() { return clienteRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clienteRouting", function() { return clienteRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cliente_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente.component */ "./src/app/features/cliente/cliente.component.ts");


var clienteRoutes = [
    {
        path: '',
        component: _cliente_component__WEBPACK_IMPORTED_MODULE_1__["ClienteComponent"],
        data: {
            pageTitle: 'Cliente'
        }
    }
];
var clienteRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(clienteRoutes);


/***/ })

}]);
//# sourceMappingURL=features-cliente-cliente-module.js.map