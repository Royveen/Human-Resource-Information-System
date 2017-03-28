"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var resources_routing_1 = require("../resources/resources.routing");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, children: resources_routing_1.resourcesRoutes }
];
exports.dashboardRouting = {
    routes: router_1.RouterModule.forChild(routes),
    components: [dashboard_component_1.DashboardComponent]
};
//# sourceMappingURL=dashboard.routing.js.map