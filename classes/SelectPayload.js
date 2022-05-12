// @ts-check

const SELECT_ENDPOINT = "Select";

class SelectPayload {

    /**
     * @param {string} uid
     */
    constructor(uid) {
        this.Uid = uid;
    }

    Uid;
}

module.exports = {
    SelectPayload,
    SELECT_ENDPOINT
}
