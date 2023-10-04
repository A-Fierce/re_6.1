import shortid from "shortid";

export default class WatchModel {
    constructor(name, zone) {
        this.name = name;
        this.time = zone;
        this.id = shortid.generate();
    }
}