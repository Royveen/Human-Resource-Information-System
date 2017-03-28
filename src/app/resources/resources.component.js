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
require("rxjs/add/operator/pairwise");
var property_resolver_1 = require("../shared/property-resolver");
var ResourcesComponent = (function () {
    function ResourcesComponent(dataService) {
        this.dataService = dataService;
        this.searchRes = '$';
        this.resources = [];
        this.filteredCustomers = [];
        this.displayModeEnum = DisplayModeEnum;
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'Resources Dashboard';
        this.filterText = 'Filter Resources:';
        this.displayMode = DisplayModeEnum.Card;
        this.dataService.getResources()
            .subscribe(function (resources) {
            _this.resources = _this.filteredCustomers = resources;
        }, function (error) {
            swal('error', "The Request encountered an error, please try again after some time", "error");
            _this.dataService.loader = false;
        });
    };
    ResourcesComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    ResourcesComponent.prototype.filterChanged = function (data) {
        if (data && this.resources) {
            data = data.toUpperCase();
            var props_1 = ['firstName', 'lastName', 'address', 'city', 'state.name'];
            var filtered = this.resources.filter(function (item) {
                var match = false;
                for (var _i = 0, props_2 = props_1; _i < props_2.length; _i++) {
                    var prop = props_2[_i];
                    if (prop.indexOf('.') > -1) {
                        var value = property_resolver_1.propertyResolver.resolve(prop, item);
                        if (value && value.toUpperCase().indexOf(data) > -1) {
                            match = true;
                            break;
                        }
                        continue;
                    }
                    //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                    if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            this.filteredCustomers = filtered;
        }
        else {
            this.filteredCustomers = this.resources;
        }
    };
    return ResourcesComponent;
}());
ResourcesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'resource-container',
        templateUrl: 'resources.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ResourcesComponent);
exports.ResourcesComponent = ResourcesComponent;
var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));
//# sourceMappingURL=resources.component.js.map