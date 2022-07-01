const mongoose = require("mongoose");

const DoctorsSchema =mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    spec: { //especialidad
        type: String,
        require: true
    },
    office: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    schedule: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Doctors", DoctorsSchema);