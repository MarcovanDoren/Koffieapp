import { Component, OnInit, ViewChild } from '@angular/core';
import { AvailableGroupsService } from '../../../core/services/available-groups.service';



@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @ViewChild('myModal') myModal;
  availableGroups;
  messageHeader;
  message;
  constructor(private availableGroupsService: AvailableGroupsService) { }

  ngOnInit() {
    this.availableGroups = this.availableGroupsService.getGroups();
  }

  newGroup(newName: string) {
    if (!this.availableGroupsService.createGroup(newName)) {
      this.messageHeader = 'Groep bestaat reeds';
      this.message = 'Er bestaat reeds een groep met deze naam. De groep is niet aangemaakt';
    }
  }
  deleteGroup(group: string) {
    if (!this.availableGroupsService.deleteGroup(group)) {
      this.messageHeader = 'Groep niet gevonden';
      this.message = 'Er bestaat geen groep met deze naam. De groep is niet verwijderd. Neem contact op met uw beheerder.';
    }
  }

  openModel() {
    this.myModal.nativeElement.className = 'modal fade show';
  }
  closeModel() {
     this.myModal.nativeElement.className = 'modal hide';
  }
}
