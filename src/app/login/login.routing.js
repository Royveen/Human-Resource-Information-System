"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.loginRouting = {
    routes: router_1.RouterModule.forChild(routes),
    components: [login_component_1.LoginComponent]
};
//# sourceMappingURL=login.routing.js.map