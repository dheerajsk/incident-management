import { IncidentManager } from './IncidentManager'
import { IncidentStatus } from './IncidentStatus'

describe('IncidentManager', () => {
  let manager: IncidentManager

  beforeEach(() => {
    manager = new IncidentManager()
  })

  it('should add a new incident', () => {
    const incident = manager.addIncident(
      'Sample Incident',
      IncidentStatus.InDev,
    )
    expect(incident.description).toBe('Sample Incident')
    expect(incident.status).toBe(IncidentStatus.InDev)
  })

  it('should remove an incident by ID', () => {
    const incident = manager.addIncident('To be removed', IncidentStatus.InTest)
    manager.removeIncident(incident.id)
    const allIncidents = manager.getAllIncidents()
    expect(allIncidents).not.toContain(incident)
  })

  it('should get incidents by status', () => {
    const incident1 = manager.addIncident('Incident 1', IncidentStatus.InDev)
    const incident2 = manager.addIncident(
      'Incident 2',
      IncidentStatus.Completed,
    )
    const inDevIncidents = manager.getIncidentsByStatus(IncidentStatus.InDev)
    expect(inDevIncidents).toContain(incident1)
    expect(inDevIncidents).not.toContain(incident2)
  })
})
