export class JsonReader {
    filepath: string;
    constructor(filepath: string) {
        this.filepath = filepath;
    }

    readData(jsonFile: String) {
        'use strict';
        //get the fs module
        const fs = require('fs');
        //read the json file Synchronously
        let rawdata = fs.readFileSync(jsonFile);
        //convert into java script object
        let jsonObject = JSON.parse(rawdata);
        return jsonObject;
    }
}
// module.exports = { readData };