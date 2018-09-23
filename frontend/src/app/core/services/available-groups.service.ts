import { Injectable } from '@angular/core';
import { Group } from '../classes/group';

@Injectable({
  providedIn: 'root'
})
export class AvailableGroupsService {
  availableGroups: Group[] = [
    new Group('The addicts'),
    new Group('The most drinkers'),
    new Group('Frequently need coffee'),
    new Group('Thee pussy\'s')
  ];
  getGroups(): Array<Group> {
    return this.availableGroups;
  }
  createGroup(group: string): boolean {
    for (const existingGroup in this.availableGroups) {
      if (existingGroup === group) {
        return false;
      }
    }
    this.availableGroups.push(new Group(group));
      return true;
  }
  deleteGroup(group: string): boolean {
    for (const existingGroup in this.availableGroups) {
      if (existingGroup === group) {
        this.availableGroups.splice(this.availableGroups.indexOf(new Group(existingGroup)), 1);
        return true;
      }
    }
      return false;
  }
  constructor() { }
}
