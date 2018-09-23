import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailableGroupsService {
  availableGroups: String[] = [
    'The addicts',
    'The most drinkers',
    'Frequently need coffee',
    'Thee pussy\'s'
  ];
  getGroups(): Array<String> {
    return this.availableGroups;
  }
  createGroup(group: string): boolean {
    for (const existingGroup in this.availableGroups) {
      if (existingGroup === group) {
        return false;
      }
    }
    this.availableGroups.push(group);
      return true;
  }
  deleteGroup(group: string): boolean {
    for (const existingGroup in this.availableGroups) {
      if (existingGroup === group) {
        this.availableGroups.splice(this.availableGroups.indexOf(existingGroup), 1);
        return true;
      }
    }
      return false;
  }
  constructor() { }
}
