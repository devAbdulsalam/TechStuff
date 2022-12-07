const  mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walletSchema = new Schema({
    phone:{
        type : String,
        require: true
    },
    balance:{
        type : number,
        require: true
    },
    transfer_pin:{
        type : number,
        require: true
    },
}, {timestamps : true});

const Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;