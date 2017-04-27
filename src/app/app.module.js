"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var loader_component_1 = require("./loader.component");
var navbar_component_1 = require("./navbar/navbar.component");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var login_module_1 = require("./login/login.module");
var add_module_1 = require("./addresource/add.module");
var app_routing_1 = require("./app.routing");
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
// import { CNgbRootModule }   from './bootstrap_modules/bootstrap.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            core_module_1.CoreModule,
            shared_module_1.SharedModule,
            app_routing_1.app_routing,
            login_module_1.LoginModule,
            dashboard_module_1.DashboardModule,
            add_module_1.AddModule
        ],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, loader_component_1.loaderComponent],
        bootstrap: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, loader_component_1.loaderComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map