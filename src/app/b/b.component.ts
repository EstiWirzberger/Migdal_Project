import { Component, OnInit } from '@angular/core';
import { VmService } from '../services/vm.service';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(public VM: VmService) { }
  process_: any=this.VM.process;

  ngOnInit(): void {

  }


  isCompanyEmployer() {
    if (!this.process_ || !this.process_.insured || !this.process_.insured.companyEmployer) {
      return '';
    } else {
      return 'עובד חברה - ' + this.process_.insured.position;
    }
  };

  addInsuredToContacts() {
    // $rootScope.$broadcast('add-insured-to-contacts', vm.process.insured);
  }


}
