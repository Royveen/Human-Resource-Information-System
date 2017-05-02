"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var resource_component_1 = require("./resource.component");
var personal_form_component_1 = require("./personal.form.component");
var work_form_component_1 = require("./work.form.component");
var project_form_component_1 = require("./project.form.component");
var seperation_component_1 = require("./seperation.component");
var can_deactivate_guard_1 = require("./can-deactivate.guard");
exports.resourcesRoutes = [
    { path: 'resources/:id', component: resource_component_1.ResourceComponent, children: [
            { path: 'personal', component: personal_form_component_1.PersonalComponent, canDeactivate: [can_deactivate_guard_1.CanDeactivateFormGuard] },
            { path: 'work', component: work_form_component_1.WorkComponent, canDeactivate: [can_deactivate_guard_1.CanDeactivateFormGuard] },
            { path: 'projects', component: project_form_component_1.ProjectComponent },
            { path: 'seperation', component: seperation_component_1.SeperationComponent }
        ]
    }
];
exports.resourcesRouting = {
    routes: router_1.RouterModule.forChild(exports.resourcesRoutes),
    components: [resource_component_1.ResourceComponent, personal_form_component_1.PersonalComponent, work_form_component_1.WorkComponent, project_form_component_1.ProjectComponent, seperation_component_1.SeperationComponent]
};
//# sourceMappingURL=resources.routing.js.map