import { IncidentStatus } from './IncidentStatus'

export class Incident {
  private static idCounter: number = 1
  public id: number
  public description: string
  public status: IncidentStatus

  constructor(description: string, status: IncidentStatus) {
    this.id = Incident.idCounter++
    this.description = description
    this.status = status
  }
}
