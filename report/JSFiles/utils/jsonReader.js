"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonReader = void 0;
class JsonReader {
    constructor(filepath) {
        this.filepath = filepath;
    }
    readData(jsonFile) {
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
exports.JsonReader = JsonReader;
// module.exports = { readData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvblJlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL2pzb25SZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxVQUFVO0lBRW5CLFlBQVksUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQjtRQUNyQixZQUFZLENBQUM7UUFDYixtQkFBbUI7UUFDbkIsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLGtDQUFrQztRQUNsQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLGlDQUFpQztRQUNqQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQWhCRCxnQ0FnQkM7QUFDRCxpQ0FBaUMifQ==