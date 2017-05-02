"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var resources_routing_1 = require("../resources/resources.routing");
var resources_component_1 = require("../resources/resources.component");
var scrum_component_1 = require("./scrum.component");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, children: [
            { path: 'resources', component: resources_component_1.ResourcesComponent, children: resources_routing_1.resourcesRoutes },
            { path: 'scrums', component: scrum_component_1.ScrumComponent }
        ]
    }
];
exports.dashboardRouting = {
    routes: router_1.RouterModule.forChild(routes),
    components: [dashboard_component_1.DashboardComponent, resources_component_1.ResourcesComponent, scrum_component_1.ScrumComponent]
};
//# sourceMappingURL=dashboard.routing.js.map