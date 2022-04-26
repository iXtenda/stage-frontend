const SELECT_ENDPOINT = "Select";

class SelectPayload {

    constructor(uid) {
        this.Uid = uid;
    }

    Uid;
}

module.exports = {
    SelectPayload,
    SELECT_ENDPOINT
}
