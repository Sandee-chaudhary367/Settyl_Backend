const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema( {
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    age: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    workStyle: {
        type: String,
        trim: true
    },
    contract: {
        type: String,
        trim: true
    },
    full_time: {
        type: String,
        trim: true
    }
});


const employee = mongoose.model('employee',employeeSchema);

module.exports = employee
