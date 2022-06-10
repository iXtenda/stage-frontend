var Request = require("./classes/Request");
var LanguagePayload = require("./classes/LanguagePayload").LanguagePayload;
var SET_LANG_ENDPOINT = require("./classes/LanguagePayload").SET_LANG_ENDPOINT;
var SelectPayload = require("./classes/SelectPayload").SelectPayload;
var SELECT_ENDPOINT = require("./classes/SelectPayload").SELECT_ENDPOINT;
var VisitPayload = require("./classes/VisitPayload").VisitPayload;
var VISIT_ENDPOINT = require("./classes/VisitPayload").VISIT_ENDPOINT;

module.exports = {
    Request,
    LanguagePayload,
    SET_LANG_ENDPOINT,
    SelectPayload,
    SELECT_ENDPOINT,
    VisitPayload,
    VISIT_ENDPOINT
}
