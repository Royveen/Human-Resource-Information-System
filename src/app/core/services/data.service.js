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
var http_1 = require("@angular/http");
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.resourcesBaseUrl = '/api/resources';
        this.authUrl = '/api/loginauth/';
        this.loader = false;
    }
    DataService.prototype.getChangedProperties = function (form) {
        var changedProperties = {};
        Object.keys(form.controls).forEach(function (name) {
            var currentControl = form.controls[name];
            var controlValue = form.controls[name]["_value"];
            if (currentControl.dirty)
                changedProperties[name] = controlValue;
        });
        return changedProperties;
    };
    DataService.prototype.getResources = function () {
        return this.http.get(this.resourcesBaseUrl)
            .map(function (res) {
            console.log(res);
            try {
                return res.json();
            }
            catch (error) {
                return res["_body"];
            }
        })
            .catch(this.handleError);
    };
    DataService.prototype.getResource = function (id, filter) {
        return this.http.get(this.resourcesBaseUrl + '/' + id + '/' + JSON.stringify(filter))
            .map(function (res) {
            console.log(res);
            try {
                return res.json();
            }
            catch (error) {
                return res["_body"];
            }
        })
            .catch(this.handleError);
    };
    DataService.prototype.getStates = function () {
        return this.http.get('/api/states')
            .map(function (res) {
            console.log(res);
            try {
                return res.json();
            }
            catch (error) {
                return res["_body"];
            }
        })
            .catch(this.handleError);
    };
    DataService.prototype.addResource = function (resource) {
        return this.http.post(this.resourcesBaseUrl + '/addroute', resource)
            .map(function (res) {
            try {
                return res.json();
            }
            catch (error) {
                return res["_body"];
            }
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateResource = function (id, changes) {
        return this.http.put(this.resourcesBaseUrl + '/' + id, changes)
            .map(function (res) {
            console.log(res);
            try {
                return res.json();
            }
            catch (error) {
                return res["_body"];
            }
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.status.toString();
            }
            return Observable_1.Observable.throw(errMessage);
        }
        return Observable_1.Observable.throw(error || 'server error');
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map