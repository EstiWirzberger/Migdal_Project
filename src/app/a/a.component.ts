import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VmService } from '../services/vm.service';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  constructor(public VM: VmService) { }
  contactPerson: any = this.VM.contactPersons;
  contactPersons: any[] = this.contactPerson;

  contactPersonType = {
    INSURED: 1,
    AGENT: 2,
    EMPLOYER: 5,
    ADVOCATE: 19,
    COMMISSIONED: 20,
    OTHER: 21,
    SURVIVOR: 22
  }

  ngOnInit(): void {
    this.contactPersons = [
      {
        id: 1,
        deliveryFlag: true,
        type: {
          code: 1,
          value: "2מבוטח"
        },
        firstName: "ניקיטה",
        lastName: "ג'יין",
        identity: 278545412,
        address: {
          homeNumber: 9,
          cityName: "רחובות",
          streetName: "אופנהיימר"
        },
        cellPhone: 525816206,
        email: "NIKITA_JAIN@AMAT.COM"
      },
      {
        id: 2,
        deliveryFlag: false,
        type: {
          code: 21,
          value: "סוכן"
        },
        firstName: "טוביה",
        lastName: "בצקי",
        identity: 433974846,
        address: {
          cityName: "מחנה תל נוף",
        },
        cellPhone: 525452206,
      }
    ]
    this.updateContactsCount(this.contactPersons.length)

  }
  resetContacts() {
    var contacts = [];
    contacts.push(this.contactPersons[0]);
    this.contactPersons = contacts;
    this.updateContactsCount(this.contactPersons.length)
  }
  deleteContacts() {
    this.contactPersons = [];
    this.updateContactsCount(this.contactPersons.length)
  }
  createContact() {
    this.contactPersons?.push({
      id: this.contactPersons.length,
      deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      type: {
        code: 1,
        value: 'מבוטח'
      },
      firstName: this.VM.process.insured.firstName,
      lastName: this.VM.process.insured.lastName,
      identity: this.VM.process.insured.identity,
      address: {
        cityName: this.VM.process.insured.address.cityName,
        streetName: this.VM.process.insured.address.streetName
      },
      cellPhone: this.VM.process.insured.address.cellPhone,
      email: this.VM.process.insured.email
    })
    this.updateContactsCount(this.contactPersons.length)
  }
  isAmbulatoryProcess() {
    return this.VM.process.processType === "AMBULATORY_HEALTH_CLAIM" || this.VM.process.processType === "AMBULATORY_HEALTH_CLAIM_CONT";
  }
  contactIsInsured(contactPerson: any) {
    return contactPerson.type.code === this.contactPersonType.INSURED;
  }
  isInsuredInHealthClaim(contactPerson?: any) {
    return this.isAmbulatoryProcess() && this.contactIsInsured(contactPerson);
  };
  addContactPerson() {
    this.contactPersons.push({
      id: this.contactPersons.length,
      deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      type: {
        code: 5,
        value: "שאר"
      },
      firstName: "ישראל",
      lastName: "ישראלי",
      identity: 278545412,
      address: {
        homeNumber: 9,
        cityName: "רחובות",
        streetName: "אופנהיימר"
      },
      cellPhone: 525816206,
      email: "NIKITA_JAIN@AMAT.COM"
    })
    this.updateContactsCount(this.contactPersons.length)
  }
  updateContactsCount(count: number) {
    this.VM.count = count;
  }
}

