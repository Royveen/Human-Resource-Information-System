"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_module_1 = require("../shared/shared.module");
var dashboard_routing_1 = require("./dashboard.routing");
var can_deactivate_guard_1 = require("../resources/can-deactivate.guard");
var mydatepicker_1 = require("mydatepicker");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, dashboard_routing_1.dashboardRouting.routes, shared_module_1.SharedModule, mydatepicker_1.MyDatePickerModule],
        declarations: [dashboard_routing_1.dashboardRouting.components],
        providers: [can_deactivate_guard_1.CanDeactivateFormGuard]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map