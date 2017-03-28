"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../core/services/data.service");
var auth_service_1 = require("../core/services/auth.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var LoginComponent = (function () {
    function LoginComponent(authService, DataService, router, titleService) {
        this.authService = authService;
        this.DataService = DataService;
        this.router = router;
        this.titleService = titleService;
        this.formLogin = {
            username: '',
            password: ''
        };
        this.loginStatus = false;
        this.doAuth = function () {
            var _this = this;
            alert(this.formLogin.username);
            this.authService.getAuth(this.formLogin.username, this.formLogin.password).subscribe(function (res) {
                _this.loginStatus = res;
                if (res) {
                    _this.authService.authUser = true;
                    _this.router.navigate(['dashboard', 'resources']);
                }
            }, function (error) {
                swal('error', "The Request encountered an error, please try again after some time", "error");
                _this.service.loader = false;
            });
            return false;
        };
        this.titleService.setTitle('Login');
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-container',
        templateUrl: 'login.component.html',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, data_service_1.DataService, router_1.Router, platform_browser_1.Title])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map