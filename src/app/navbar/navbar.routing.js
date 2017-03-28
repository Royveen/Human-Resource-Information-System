"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var navbar_component_1 = require("./navbar.component");
var resources_routing_1 = require("../resources/resources.routing");
var add_routing_1 = require("../addresource/add.routing");
Array.prototype.push.apply(resources_routing_1.resourcesRoutes, add_routing_1.Addroutes);
var routes = [
    {
        path: 'main',
        component: navbar_component_1.NavbarComponent,
        children: resources_routing_1.resourcesRoutes
    }
];
exports.navbarRouting = {
    routes: router_1.RouterModule.forChild(routes),
    components: [navbar_component_1.NavbarComponent]
};
//# sourceMappingURL=navbar.routing.js.map