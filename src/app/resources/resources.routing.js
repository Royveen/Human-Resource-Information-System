"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var resources_component_1 = require("./resources.component");
var resource_component_1 = require("./resource.component");
var resources_detail_component_1 = require("./resources-detail.component");
var resource_edit_component_1 = require("./resource-edit.component");
var personal_form_component_1 = require("./personal.form.component");
var work_form_component_1 = require("./work.form.component");
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
    components: [resources_component_1.ResourcesComponent, resource_component_1.ResourceComponent, resources_detail_component_1.ResourceDetailComponent, resource_edit_component_1.ResourceEditComponent, personal_form_component_1.PersonalComponent, work_form_component_1.WorkComponent]
};
//# sourceMappingURL=resources.routing.js.map