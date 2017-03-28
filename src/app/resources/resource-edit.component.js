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
var ResourceEditComponent = (function () {
    function ResourceEditComponent(router, route, dataService, dialogService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.dialogService = dialogService;
        this.resource = {
            sap_id: null,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            country: '',
            location: '',
            state: '',
            city: '',
            email: '',
            date_of_birth: '',
            date_of_joining: '',
            contact: '',
            role: '',
            Designation: '',
            status: '',
            seat_no: '',
            transport_avail: '',
            vnet: '',
            projects: [],
            total_alloc: '',
            record_status: '',
            user_access: ''
        };
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
        this.route.parent.params.subscribe(function (params) {
            var id = params['id'];
            _this.dataService.getResource(id)
                .subscribe(function (resource) { return _this.resource = resource; }, function (error) {
                swal('error', "The Request encountered an error, please try again after some time", "error");
                _this.dataService.loader = false;
            });
        });
    }
    ResourceEditComponent.prototype.getChangedProperties = function () {
        var _this = this;
        var changedProperties = {};
        Object.keys(this.resourceForm.controls).forEach(function (name) {
            var currentControl = _this.resourceForm.controls[name];
            var controlValue = _this.resourceForm.controls[name]["_value"];
            if (currentControl.dirty)
                changedProperties[name] = controlValue;
        });
        return changedProperties;
    };
    ResourceEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var changedProp = this.getChangedProperties();
        this.dataService.updateResource(this.resource["_id"], changedProp)
            .subscribe(function (res) {
            //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            _this.resourceForm.form.markAsPristine();
            _this.message = res;
            setTimeout(function () {
                this.message = null;
            }, 1000);
        });
    };
    ResourceEditComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        this.router.navigate(['dashboard', 'resources']);
        //Route guard will take care of dialog service so this isn't needed now
        // this.dialogService.confirm('Lose unsaved changes?').then((leave: boolean) => {
        //   if (leave) {
        //     this.router.navigate(['/']);
        //   }
        // });
    };
    ResourceEditComponent.prototype.canDeactivate = function () {
        if (!this.resourceForm.dirty) {
            return true;
        }
        return this.dialogService.confirm('Discard form changes?');
    };
    return ResourceEditComponent;
}());
__decorate([
    core_1.ViewChild('resourceForm'),
    __metadata("design:type", forms_1.NgForm)
], ResourceEditComponent.prototype, "resourceForm", void 0);
ResourceEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'resource-edit',
        templateUrl: 'resource-edit.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        data_service_1.DataService,
        dialog_service_1.DialogService])
], ResourceEditComponent);
exports.ResourceEditComponent = ResourceEditComponent;
//# sourceMappingURL=resource-edit.component.js.map