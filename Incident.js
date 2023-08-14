"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
var Incident = exports.Incident = /** @class */ (function () {
    function Incident(description, status) {
        this.id = Incident.idCounter++;
        this.description = description;
        this.status = status;
    }
    Incident.idCounter = 1;
    return Incident;
}());
