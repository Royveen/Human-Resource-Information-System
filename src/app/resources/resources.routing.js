"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var resources_component_1 = require("./resources.component");
var resource_component_1 = require("./resource.component");
var resources_detail_component_1 = require("./resources-detail.component");
var resource_edit_component_1 = require("./resource-edit.component");
exports.resourcesRoutes = [
    { path: 'resources', component: resources_component_1.ResourcesComponent },
    { path: 'resources/:id', component: resource_component_1.ResourceComponent, children: [
            { path: 'details', component: resources_detail_component_1.ResourceDetailComponent },
            { path: 'edit', component: resource_edit_component_1.ResourceEditComponent }
        ]
    }
];
exports.resourcesRouting = {
    routes: router_1.RouterModule.forChild(exports.resourcesRoutes),
    components: [resources_component_1.ResourcesComponent, resource_component_1.ResourceComponent, resources_detail_component_1.ResourceDetailComponent, resource_edit_component_1.ResourceEditComponent]
};
//# sourceMappingURL=resources.routing.js.map