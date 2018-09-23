import { Component, OnInit } from '@angular/core';
import { AvailableGroupsService } from '../../../core/services/available-groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  availableGroups;
  constructor(private availableGroupsService: AvailableGroupsService) { }

  ngOnInit() {
    this.availableGroups = this.availableGroupsService.getGroups();
  }

  newGroup(newName: string) {
    if (!this.availableGroupsService.createGroup(newName)) {
      // TODO create error message
    }
  }
  deleteGroup(group: string) {
    if (!this.availableGroupsService.deleteGroup(group)) {
      // TODO create error message
    }
  }
}
