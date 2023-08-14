import { IncidentManager } from './IncidentManager'
import { IncidentStatus } from './IncidentStatus'

const manager = new IncidentManager()
manager.addIncident('Bug #1', IncidentStatus.InDev)
manager.addIncident('Bug #2', IncidentStatus.Completed)
manager.viewAllIncidents()
manager.viewIncidentsByStatus(IncidentStatus.InDev)
manager.removeIncident(1)
manager.viewAllIncidents()
