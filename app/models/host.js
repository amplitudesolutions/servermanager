var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HostSchema = new Schema({
    name: String,
    IPAddress: String,
    description: String,
    cluster: {type: Schema.Types.ObjectId, ref: 'Cluster'}
});

module.exports = mongoose.model('Host', HostSchema);