module.exports = class Request {

    constructor(endPoint, payload) {
        this.endPoint = endPoint;
        this.payload = payload;
    }

    endPoint;
    payload;
}
