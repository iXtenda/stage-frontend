// @ts-check

module.exports = class Request {
    /**
     * @param {string} endPoint
     * @param {any} payload
     */
    constructor(endPoint, payload) {
        this.endPoint = endPoint;
        this.payload = payload;
    }
    endPoint;
    payload;
}
