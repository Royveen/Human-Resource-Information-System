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
var data_service_1 = require("../core/services/data.service");
var ResourceDetailComponent = (function () {
    function ResourceDetailComponent(route, dataService) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.route.parent.params.subscribe(function (params) {
            var id = params['id'];
            _this.dataService.getResource(id)
                .subscribe(function (resource) { return _this.resource = resource; }, function (error) {
                swal('error', "The Request encountered an error, please try again after some time", "error");
                _this.dataService.loader = false;
            });
        });
    }
    return ResourceDetailComponent;
}());
ResourceDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'resource-details',
        templateUrl: 'resource-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.DataService])
], ResourceDetailComponent);
exports.ResourceDetailComponent = ResourceDetailComponent;
//# sourceMappingURL=resources-detail.component.js.map