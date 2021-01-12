(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-usuario-usuario-module"],{

/***/ "./src/app/features/usuario/usuario.component.css":
/*!********************************************************!*\
  !*** ./src/app/features/usuario/usuario.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n    background-color: whitesmoke;\r\n    color: #FFF;\r\n  }\r\n  \r\n  .container {\r\n    padding-top: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtHQUNiOztFQUVEO0lBQ0Usa0JBQWtCO0dBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/features/usuario/usuario.component.html":
/*!*********************************************************!*\
  !*** ./src/app/features/usuario/usuario.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n        <div class=\"row\">\n            <sa-big-breadcrumbs [items]=\"['Usuário']\" icon=\"user\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"well\">\n                    <p-table #dt [columns]=\"cols\" [(selection)]=\"selectedUser\" (onRowSelect)=\"onRowSelect($event)\" [value]=\"usuariodateList\" [paginator]=\"true\" [rows]=\"10\">\n                        <ng-template pTemplate=\"caption\">Lista de Usuários</ng-template>\n                        <ng-template pTemplate=\"caption\">\n                            <div style=\"text-align: right\">\n                                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                                <input type=\"text\" pInputText size=\"50\" placeholder=\"Pesquisar\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n                            </div>\n                        </ng-template>\n                        <ng-template pTemplate=\"summary\" let-rowData>\n                            <div style=\"text-align:left\">\n                                <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"showDialogToAdd();\" label=\"Cadasrar Usuário\"></button>\n                            </div>\n                        </ng-template>\n                        <ng-template pTemplate=\"header\" let-columns>\n                            <tr>\n                                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                    {{col.header}}\n                                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                                </th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-usuario let-columns=\"columns\">\n                            <tr [pSelectableRow]=\"usuario\">\n                                <td>{{usuario.id}}</td>\n                                <td>{{usuario.name }}</td>\n                                <td>{{usuario.email}}</td>\n                                <td>{{usuario.created_at | date:\"dd/MM/yyyy\"}}</td>\n                                <td>\n                                    <button type=\"button\" label=\"Editar\" (click)=\"update(usuario)\" pButton icon=\"fa fa-edit\"></button>\n                                </td>\n                                <td>\n                                    <button label=\"Deletar\" (click)=\"delete(usuario)\" class=\"ui-button-rounded ui-button-danger\" type=\"button\" pButton icon=\"fa fa-edit\"></button>\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </p-table>\n     \n                    <!-- CRIAR USUARIO -->\n                    <p-dialog header=\"Cadastrar Usuário\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"500\">\n                        <div class=\"ui-g ui-fluid\" *ngIf=\"user\">\n                            <form [formGroup]=\"formulario\" (ngSubmit)=\"criar()\">\n                                <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"name\">Nome</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                        <input type=\"text\" formControlName=\"name\" placeholder=\"Nome\" name=\"name\" class=\"form-control\" id=\"name\">\n                                    </div>\n                                </div>\n                                <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"email\">E-Mail</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                        <input type=\"text\" formControlName=\"email\" placeholder=\"E-mail\" name=\"email\" class=\"form-control\" id=\"email\">\n                                    </div>\n                                </div>\n                                <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"senha\">Senha</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                        <input type=\"text\" formControlName=\"password\" placeholder=\"Senha\" name=\"password\" class=\"form-control\" id=\"password\">\n                                    </div>\n                                </div>\n                                <div>\n                                    <button type=\"submit\" [disabled]=\"formulario.invalid\" pButton icon=\"fa fa-check\" label=\"Save\"></button>\n                                </div>\n                            </form>\n                        </div>\n                    </p-dialog>\n    \n                    <!-- Editar Usuario -->\n    \n                    <p-dialog header=\"Editar Usuário\" [(visible)]=\"display2\" [modal]=\"true\" [responsive]=\"true\" [width]=\"500\">\n                        <div class=\"ui-g ui-fluid\" *ngIf=\"user\">\n                            <form [formGroup]=\"formularioEdit\" (ngSubmit)=\"editUser()\">\n                                <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"name\">Nome</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                        <input type=\"text\" formControlName=\"name\" placeholder=\"Nome\" name=\"name\" class=\"form-control\" id=\"name\">\n                                    </div>\n                                </div>\n                                <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"email\">E-Mail</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                        <input type=\"text\" formControlName=\"email\" placeholder=\"E-mail\" name=\"email\" class=\"form-control\" id=\"email\">\n                                    </div>\n                                </div>\n                                <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"password\">Senha</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                        <input type=\"password\" formControlName=\"password\" placeholder=\"E-mail\" name=\"password\" class=\"form-control\" id=\"password\">\n                                    </div>\n                                </div>\n                                <div>\n                                    <button type=\"submit\" [disabled]=\"formularioEdit.invalid\" pButton icon=\"fa fa-check\" label=\"Save\"></button>\n                                </div>\n                            </form>\n                        </div>\n                    </p-dialog>\n\n                    <p-dialog header=\"Excluir Usuario\" [(visible)]=\"display3\" [modal]=\"true\" [responsive]=\"true\" [width]=\"400\">\n                        <div class=\"ui-g ui-fluid\" *ngIf=\"user\">\n                                <h3>Deseja mesmo excluir o usuário ?</h3>\n                            <div class=\"ui-g-12\">\n                            </div>\n                        </div>\n                        <p-footer>\n                            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"delete(usuario)\" label=\"Sim\"></button>\n                            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"close()\" label=\"Não\" class=\"ui-button-secondary\"></button>\n                        </p-footer>\n                    </p-dialog>\n    \n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/features/usuario/usuario.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/usuario/usuario.component.ts ***!
  \*******************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/usuario-info.service */ "./src/app/services/usuario-info.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(usuarioService, formBuilder, router) {
        this.usuarioService = usuarioService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.display = false;
        this.display2 = false;
        this.display3 = false;
        this.usuario_user = [];
        this.usuario_edit = [];
        this.user = {};
        this.adunit = {};
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.getAllUser();
        this.configurarFormulario();
        this.configurarFormularioEdit();
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Nome' },
            { field: 'email', header: 'E-Mail' },
            { field: 'created_at', header: 'Data de Criação' },
            { field: 'Editar', header: 'Editar' },
            { field: 'Deletar', header: 'Deletar' }
        ];
    };
    UsuarioComponent.prototype.showDialogToAdd = function () {
        this.display = true;
        this.newUsuario = true;
        this.user = {};
    };
    UsuarioComponent.prototype.getAllUser = function () {
        var _this = this;
        this.usuarioService.getAllUser().subscribe(function (data) {
            _this.usuariodateList = data;
            console.log(_this.usuariodateList);
        });
    };
    UsuarioComponent.prototype.selectUsuario = function (usuario) {
        this.usuario = usuario;
    };
    UsuarioComponent.prototype.configurarFormulario = function () {
        this.formulario = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    UsuarioComponent.prototype.configurarFormularioEdit = function () {
        this.formularioEdit = this.formBuilder.group({
            id: [''],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null]
        });
    };
    UsuarioComponent.prototype.criar = function () {
        var _this = this;
        this.usuarioService.criar(this.formulario.value).subscribe(function (data) {
            _this.router.navigate(['usuario']);
            _this.formulario.reset();
            window.location.reload();
        });
    };
    UsuarioComponent.prototype.update = function (user) {
        var _this = this;
        this.display2 = true;
        this.usuarioService.getUserById(+user.id)
            .subscribe(function (data) {
            _this.formularioEdit.patchValue(data);
        });
    };
    UsuarioComponent.prototype.deleteModal = function () {
        this.display3 = true;
    };
    UsuarioComponent.prototype.delete = function (user) {
        var _this = this;
        this.usuarioService.delete(user.id)
            .subscribe(function (data) {
            _this.usuario_user = _this.usuario_user.filter(function (u) { return u !== user; });
        });
        var timeout = 1000;
        setTimeout(function () {
            window.location.reload();
        }, timeout);
    };
    ;
    UsuarioComponent.prototype.onRowSelect = function (event) {
        this.newUsuario = false;
        this.user = this.cloneUser(event.data);
        this.display = true;
    };
    UsuarioComponent.prototype.cloneUser = function (c) {
        var user = {};
        for (var prop in c) {
            user[prop] = c[prop];
        }
        return user;
    };
    UsuarioComponent.prototype.editUser = function () {
        this.usuarioService.update(this.formularioEdit.value)
            .subscribe(function (data) {
            window.location.reload();
        });
    };
    UsuarioComponent.prototype.close = function () {
        this.display3 = false;
    };
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/features/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.css */ "./src/app/features/usuario/usuario.component.css")]
        }),
        __metadata("design:paramtypes", [_services_usuario_info_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioInfoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/features/usuario/usuario.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/usuario/usuario.module.ts ***!
  \****************************************************/
/*! exports provided: UsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModule", function() { return UsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _usuario_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.routing */ "./src/app/features/usuario/usuario.routing.ts");
/* harmony import */ var _usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.component */ "./src/app/features/usuario/usuario.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/datatable */ "./node_modules/primeng/datatable.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_datatable__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UsuarioModule = /** @class */ (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _usuario_routing__WEBPACK_IMPORTED_MODULE_2__["usuarioRouting"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                primeng_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            declarations: [_usuario_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioComponent"]]
        })
    ], UsuarioModule);
    return UsuarioModule;
}());



/***/ }),

/***/ "./src/app/features/usuario/usuario.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/usuario/usuario.routing.ts ***!
  \*****************************************************/
/*! exports provided: usuarioRoutes, usuarioRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuarioRoutes", function() { return usuarioRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuarioRouting", function() { return usuarioRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.component */ "./src/app/features/usuario/usuario.component.ts");


var usuarioRoutes = [
    {
        path: '',
        component: _usuario_component__WEBPACK_IMPORTED_MODULE_1__["UsuarioComponent"],
        data: {
            pageTitle: 'Usuario'
        }
    }
];
var usuarioRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(usuarioRoutes);


/***/ })

}]);
//# sourceMappingURL=features-usuario-usuario-module.js.map