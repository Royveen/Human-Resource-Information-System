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
var AddComponent = (function () {
    function AddComponent(service) {
        this.service = service;
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy'
        };
        this.resDet = {
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
            record_status: 'Active',
            user_access: ''
        };
        this.projectDet = {
            client_id: '',
            assignment_start_date: '',
            assignment_end_date: '',
            project_group: '',
            project_id: '',
            project_name: '',
            status_in_project: '',
            team_group: '',
            team_name: '',
            allocation: '0',
            manager_1_id: '',
            manager_2_id: '',
            manager_1_name: '',
            manager_2_name: '',
            project_country: '',
            project_location: ''
        };
    }
    AddComponent.prototype.insertProject = function () {
        this.resDet.projects.push(this.projectDet);
    };
    AddComponent.prototype.removeProject = function (id) {
        this.resDet.projects.splice(id, 1);
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function () {
            _this.service.loader = true;
            _this.service.addResource(_this.resDet).subscribe(function (res) {
                console.log(res);
                swal('success', "Saved Successfully", "success");
                _this.service.loader = false;
            }, function (error) {
                swal('error', "The Request encountered an error, please try again after some time", "error");
                _this.service.loader = false;
            });
        });
    };
    return AddComponent;
}());
AddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-container',
        templateUrl: 'add.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AddComponent);
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map