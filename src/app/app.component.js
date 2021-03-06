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
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var data_service_1 = require("./core/services/data.service");
var router_2 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(titleService, loadingService, router) {
        this.titleService = titleService;
        this.loadingService = loadingService;
        this.router = router;
        this.titleService.setTitle('Resource Management');
        router.events.subscribe(function (event) {
            if (event instanceof router_2.NavigationStart) {
            }
            else if (event instanceof router_2.NavigationEnd) {
            }
            else if (event instanceof router_2.NavigationError) {
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-container',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, data_service_1.DataService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map