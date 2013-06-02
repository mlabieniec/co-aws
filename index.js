var AWS = require('aws-sdk');

exports.init = function init(compound) {
    AWS.config.loadFromPath(compound.root+'/config/aws.json');
    compound.AWS = AWS;
};
