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
var forms_1 = require("@angular/forms");
var data_service_1 = require("../core/services/data.service");
var dialog_service_1 = require("../core/services/dialog.service");
var PersonalComponent = (function () {
    function PersonalComponent(router, route, dataService, dialogService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.dialogService = dialogService;
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy',
            editableDateField: false,
            showSelectorArrow: false,
            openSelectorTopOfInput: true,
        };
        this.resource = {};
        this.resourceFilter = {
            firstName: 1,
            lastName: 1,
            date_of_birth: 1,
            address: 1,
            state: 1,
            country: 1,
            contact: 1
        };
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
        this.route.parent.params.subscribe(function (params) {
            var id = params['id'];
            _this.dataService.getResource(id, _this.resourceFilter)
                .subscribe(function (resource) { return _this.resource = resource; }, function (error) {
                swal('error', "The Request encountered an error, please try again after some time", "error");
                _this.dataService.loader = false;
            });
        });
    }
    PersonalComponent.prototype.ngOnInit = function () {
        console.log(this.personalForm.controls);
    };
    PersonalComponent.prototype.onSubmit = function () {
        var _this = this;
        var changedProp = this.dataService.getChangedProperties(this.personalForm);
        this.dialogService.confirm('Are you sure?')
            .then(function () {
            _this.dataService.loader = true;
            _this.dataService.updateResource(_this.resource["_id"], changedProp)
                .subscribe(function (res) {
                _this.dialogService.success(res);
                _this.dataService.loader = false;
                _this.personalForm.form.markAsPristine();
            }, function (error) {
                _this.dialogService.error("The Request encountered an error, please try again after some time");
            });
        });
    };
    PersonalComponent.prototype.canDeactivate = function () {
        if (!this.personalForm.dirty) {
            return true;
        }
        return this.dialogService.confirm('Discard form changes?');
    };
    return PersonalComponent;
}());
__decorate([
    core_1.ViewChild('personalForm'),
    __metadata("design:type", forms_1.NgForm)
], PersonalComponent.prototype, "personalForm", void 0);
PersonalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'personal-form-container',
        templateUrl: 'personal.form.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        data_service_1.DataService,
        dialog_service_1.DialogService])
], PersonalComponent);
exports.PersonalComponent = PersonalComponent;
//# sourceMappingURL=personal.form.component.js.map