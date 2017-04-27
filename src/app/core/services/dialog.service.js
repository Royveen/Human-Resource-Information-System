"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DialogService = (function () {
    function DialogService() {
    }
    DialogService.prototype.success = function (message) {
        swal('success', message || 'Request completed successfully', 'success');
    };
    DialogService.prototype.error = function (message) {
        swal('error', message || 'Error Occurred', 'error');
    };
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            return resolve(swal({
                title: '',
                text: message || 'Is it OK?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }));
        });
    };
    return DialogService;
}());
DialogService = __decorate([
    core_1.Injectable()
], DialogService);
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map