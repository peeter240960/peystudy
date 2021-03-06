const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema(
    {
        id: String,
        cid: String,
        sid: String,
        role: {
            type: String,
            default: 'student'
        },
    },
    {
        timestamps: true
    }
);
userSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('User', userSchema, 'users');