"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var add_component_1 = require("./add.component");
exports.Addroutes = [
    { path: 'new', component: add_component_1.AddComponent }
];
exports.addRouting = {
    routes: router_1.RouterModule.forChild(exports.Addroutes),
    components: [add_component_1.AddComponent]
};
//# sourceMappingURL=add.routing.js.map