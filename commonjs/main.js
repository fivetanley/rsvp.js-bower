"use strict";
var EventTarget = require("./rsvp/events").EventTarget;
var Promise = require("./rsvp/promise").Promise;
var denodeify = require("./rsvp/node").denodeify;
var all = require("./rsvp/all").all;
var hash = require("./rsvp/hash").hash;
var defer = require("./rsvp/defer").defer;
var config = require("./rsvp/config").config;
var resolve = require("./rsvp/resolve").resolve;
var reject = require("./rsvp/reject").reject;

function configure(name, value) {
  config[name] = value;
}


exports.Promise = Promise;
exports.EventTarget = EventTarget;
exports.all = all;
exports.hash = hash;
exports.defer = defer;
exports.denodeify = denodeify;
exports.configure = configure;
exports.resolve = resolve;
exports.reject = reject;