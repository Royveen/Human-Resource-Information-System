var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

// -- Project Schema
var projectSchema = new Schema();
projectSchema.add({
    // _id: false, to remove _id for sub-documents
    client_id: String,
    assignment_start_date: Object,
    assignment_end_date: Object,
    project_group: String,
    project_id: String,
    project_name: String,
    status_in_project: String,
    team_group: String,
    team_name: String,
    allocation: String,
    manager_1_id: String,
    manager_2_id: String,
    manager_1_name: String,
    manager_2_name: String,
    project_country: String,
    project_location: String
});

// -- Resource Schema
var resourceSchema = new Schema();
resourceSchema.add({
    sap_id: Number,
    firstName: String,
    lastName: String,
    gender: String,
    address: String,
    country: String,
    location: String,
    state: String,
    email: String,
    date_of_birth: Object,
    date_of_joining: Object,
    contact: String,
    role: String,
    Designation: String,
    city: String,
    status: String,
    seat_no: String,
    transport_avail: String,
    vnet: String,
    projects: [projectSchema],
    total_alloc: String,
    record_status: String,
    user_access: String,
})

// export schemas
var db_schemas = {
    project: projectSchema,
    resource: resourceSchema
}


module.exports = db_schemas;