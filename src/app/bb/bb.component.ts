import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VmService } from '../services/vm.service';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.css']
})
export class BbComponent implements OnInit {

  constructor(public VM: VmService) { }
  isToShow = this.VM.isToShow;
  @Input() count:number=0;

  ngOnInit(): void {
    this.isToShow = true;
  }
  @Output() add: EventEmitter<any> = new EventEmitter<any>()
  @Output() reset: EventEmitter<any> = new EventEmitter<any>()
  @Output() delete: EventEmitter<any> = new EventEmitter<any>()
  resetContacts() {
    this.reset.emit()
  }
  deleteContacts() {
    this.delete.emit()

  }
  addToContacts() {
    this.add.emit()
  }

}
