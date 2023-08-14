"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentManager = void 0;
var Incident_1 = require("./Incident");
var IncidentManager = /** @class */ (function () {
    function IncidentManager() {
        this.incidents = [];
    }
    // Add a new incident to the system
    IncidentManager.prototype.addIncident = function (description, status) {
        var newIncident = new Incident_1.Incident(description, status);
        this.incidents.push(newIncident);
        console.log("Added Incident with ID: ".concat(newIncident.id));
        return newIncident;
    };
    // Remove an incident using its unique identifier
    IncidentManager.prototype.removeIncident = function (id) {
        console.log('dsd');
        console.log(this.incidents);
        var index = this.incidents.findIndex(function (incident) { return incident.id === id; });
        if (index !== -1) {
            this.incidents.splice(index, 1);
            console.log("Removed Incident with ID: ".concat(id));
        }
        else {
            console.error("Incident with ID: ".concat(id, " not found!"));
        }
    };
    // Get incidents filtered by their status
    IncidentManager.prototype.getIncidentsByStatus = function (status) {
        var filteredIncidents = this.incidents.filter(function (incident) { return incident.status === status; });
        console.log("Incidents with status \"".concat(status, "\":"), filteredIncidents);
        return filteredIncidents;
    };
    // Get all incidents
    IncidentManager.prototype.getAllIncidents = function () {
        console.log('All incidents:', this.incidents);
        return this.incidents;
    };
    return IncidentManager;
}());
exports.IncidentManager = IncidentManager;
