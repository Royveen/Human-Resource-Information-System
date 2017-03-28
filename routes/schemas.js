var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db_schemas = {
    addresource: {
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
        projects: Object,
        total_alloc: String,
        record_status: String,
        user_access: String,
    }
}

module.exports = db_schemas;