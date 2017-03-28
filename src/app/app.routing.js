"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
require("rxjs/add/operator/pairwise");
var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes, { useHash: true });
// ,{ useHash: true,enableTracing:true });
//# sourceMappingURL=app.routing.js.map