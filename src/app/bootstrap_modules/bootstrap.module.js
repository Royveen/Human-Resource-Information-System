"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_1 = require("@angular/core");
var NGB_MODULES = [
    ng_bootstrap_1.NgbAccordionModule, ng_bootstrap_1.NgbAlertModule, ng_bootstrap_1.NgbCarouselModule, ng_bootstrap_1.NgbCollapseModule, ng_bootstrap_1.NgbDatepickerModule,
    ng_bootstrap_1.NgbDropdownModule, ng_bootstrap_1.NgbModalModule, ng_bootstrap_1.NgbPaginationModule, ng_bootstrap_1.NgbPopoverModule, ng_bootstrap_1.NgbProgressbarModule, ng_bootstrap_1.NgbRatingModule,
    ng_bootstrap_1.NgbTabsetModule, ng_bootstrap_1.NgbTimepickerModule, ng_bootstrap_1.NgbTooltipModule, ng_bootstrap_1.NgbTypeaheadModule
];
var CNgbRootModule = (function () {
    function CNgbRootModule() {
    }
    return CNgbRootModule;
}());
CNgbRootModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbAlertModule.forRoot(), ng_bootstrap_1.NgbCollapseModule.forRoot(), ng_bootstrap_1.NgbProgressbarModule.forRoot(),
            ng_bootstrap_1.NgbTooltipModule.forRoot(), ng_bootstrap_1.NgbTypeaheadModule.forRoot(), ng_bootstrap_1.NgbAccordionModule.forRoot(), ng_bootstrap_1.NgbCarouselModule.forRoot(),
            ng_bootstrap_1.NgbDatepickerModule.forRoot(), ng_bootstrap_1.NgbDropdownModule.forRoot(), ng_bootstrap_1.NgbModalModule.forRoot(), ng_bootstrap_1.NgbPaginationModule.forRoot(),
            ng_bootstrap_1.NgbPopoverModule.forRoot(), ng_bootstrap_1.NgbProgressbarModule.forRoot(), ng_bootstrap_1.NgbRatingModule.forRoot(), ng_bootstrap_1.NgbTabsetModule.forRoot(),
            ng_bootstrap_1.NgbTimepickerModule.forRoot(), ng_bootstrap_1.NgbTooltipModule.forRoot()
        ],
        exports: NGB_MODULES
    })
], CNgbRootModule);
exports.CNgbRootModule = CNgbRootModule;
// tslint:disable-next-line:max-classes-per-file
var CNgbModule = (function () {
    function CNgbModule() {
    }
    CNgbModule.forRoot = function () { return { ngModule: CNgbRootModule }; };
    return CNgbModule;
}());
CNgbModule = __decorate([
    core_1.NgModule({ imports: NGB_MODULES, exports: NGB_MODULES })
], CNgbModule);
exports.CNgbModule = CNgbModule;
//# sourceMappingURL=bootstrap.module.js.map