import { Incident } from './Incident'
import { IncidentStatus } from './IncidentStatus'

export class IncidentManager {
  private incidents: Incident[] = []

  // Add a new incident to the system
  addIncident(description: string, status: IncidentStatus): Incident {
    const newIncident = new Incident(description, status)
    this.incidents.push(newIncident)
    console.log(`Added Incident with ID: ${newIncident.id}`)
    return newIncident
  }

  // Remove an incident using its unique identifier
  removeIncident(id: number): void {
    console.log('dsd')
    console.log(this.incidents)
    const index = this.incidents.findIndex((incident) => incident.id === id)
    if (index !== -1) {
      this.incidents.splice(index, 1)
      console.log(`Removed Incident with ID: ${id}`)
    } else {
      console.error(`Incident with ID: ${id} not found!`)
    }
  }

  // Get incidents filtered by their status
  getIncidentsByStatus(status: IncidentStatus): Incident[] {
    const filteredIncidents = this.incidents.filter(
      (incident) => incident.status === status,
    )
    console.log(`Incidents with status "${status}":`, filteredIncidents)
    return filteredIncidents
  }

  // Get all incidents
  getAllIncidents(): Incident[] {
    console.log('All incidents:', this.incidents)
    return this.incidents
  }
}
