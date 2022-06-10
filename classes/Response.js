//@ts-check

module.exports = class Response {
    /**
     * @param {number} status
     * @param {string} message
     */
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
    status;
    message;
}
