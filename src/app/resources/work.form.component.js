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
var WorkComponent = (function () {
    function WorkComponent(router, route, dataService, dialogService) {
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
            "date_of_joining": 1,
            "email": 1,
            "role": 1,
            "Designation": 1,
            "seat_no": 1,
            "transport_avail": 1,
            "vnet": 1
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
    WorkComponent.prototype.ngOnInit = function () {
        console.log(this.workForm.controls);
    };
    WorkComponent.prototype.onSubmit = function () {
        var _this = this;
        var changedProp = this.dataService.getChangedProperties(this.workForm);
        this.dialogService.confirm('Are you sure?')
            .then(function () {
            _this.dataService.loader = true;
            _this.dataService.updateResource(_this.resource["_id"], changedProp)
                .subscribe(function (res) {
                _this.dialogService.success(res);
                _this.dataService.loader = false;
                _this.workForm.form.markAsPristine();
            }, function (error) {
                _this.dialogService.error("The Request encountered an error, please try again after some time");
                _this.dataService.loader = false;
            });
        });
    };
    WorkComponent.prototype.canDeactivate = function () {
        if (!this.workForm.dirty) {
            return true;
        }
        return this.dialogService.confirm('Discard form changes?');
    };
    return WorkComponent;
}());
__decorate([
    core_1.ViewChild('workForm'),
    __metadata("design:type", forms_1.NgForm)
], WorkComponent.prototype, "workForm", void 0);
WorkComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'work-form-container',
        templateUrl: 'work.form.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        data_service_1.DataService,
        dialog_service_1.DialogService])
], WorkComponent);
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=work.form.component.js.map