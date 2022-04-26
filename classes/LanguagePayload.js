const SET_LANG_ENDPOINT = "SetLanguage";

class LanguagePayload {

    constructor(lang) {
        this.Language = lang;
    }

    Language;
}

module.exports = {
    LanguagePayload,
    SET_LANG_ENDPOINT
}