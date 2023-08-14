"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IncidentManager_1 = require("./IncidentManager");
var IncidentStatus_1 = require("./IncidentStatus");
describe('IncidentManager', function () {
    var manager;
    beforeEach(function () {
        manager = new IncidentManager_1.IncidentManager();
    });
    it('should add a new incident', function () {
        var incident = manager.addIncident('Sample Incident', IncidentStatus_1.IncidentStatus.InDev);
        expect(incident.description).toBe('Sample Incident');
        expect(incident.status).toBe(IncidentStatus_1.IncidentStatus.InDev);
    });
    it('should remove an incident by ID', function () {
        var incident = manager.addIncident('To be removed', IncidentStatus_1.IncidentStatus.InTest);
        manager.removeIncident(incident.id);
        var allIncidents = manager.getAllIncidents();
        expect(allIncidents).not.toContain(incident);
    });
    it('should get incidents by status', function () {
        var incident1 = manager.addIncident('Incident 1', IncidentStatus_1.IncidentStatus.InDev);
        var incident2 = manager.addIncident('Incident 2', IncidentStatus_1.IncidentStatus.Completed);
        var inDevIncidents = manager.getIncidentsByStatus(IncidentStatus_1.IncidentStatus.InDev);
        expect(inDevIncidents).toContain(incident1);
        expect(inDevIncidents).not.toContain(incident2);
    });
    // Add more tests as needed
});
