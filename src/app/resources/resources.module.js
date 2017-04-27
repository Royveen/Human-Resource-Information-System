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
var resources_routing_1 = require("../resources/resources.routing");
var can_deactivate_guard_1 = require("../resources/can-deactivate.guard");
var mydatepicker_1 = require("mydatepicker");
var ResourcesModule = (function () {
    function ResourcesModule() {
    }
    return ResourcesModule;
}());
ResourcesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, resources_routing_1.resourcesRouting.routes, shared_module_1.SharedModule, mydatepicker_1.MyDatePickerModule],
        declarations: [resources_routing_1.resourcesRouting.components],
        providers: [can_deactivate_guard_1.CanDeactivateFormGuard]
    })
], ResourcesModule);
exports.ResourcesModule = ResourcesModule;
//# sourceMappingURL=resources.module.js.map