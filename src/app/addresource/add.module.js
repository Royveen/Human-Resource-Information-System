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
var add_routing_1 = require("./add.routing");
var mydatepicker_1 = require("mydatepicker");
var AddModule = (function () {
    function AddModule() {
    }
    return AddModule;
}());
AddModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, add_routing_1.addRouting.routes, shared_module_1.SharedModule, mydatepicker_1.MyDatePickerModule],
        declarations: [add_routing_1.addRouting.components]
    })
], AddModule);
exports.AddModule = AddModule;
//# sourceMappingURL=add.module.js.map