//@ts-check

const VISIT_ENDPOINT = "VisitUrl";

class VisitPayload {
    /**
     * @param {string} url URL to visit
     */
    constructor(url) {
        this.Url = url;
    }
    Url;
}

module.exports = {
    VisitPayload,
    VISIT_ENDPOINT
}
