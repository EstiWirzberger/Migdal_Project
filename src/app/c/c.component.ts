import { Component, OnInit } from '@angular/core';
import { VmService } from '../services/vm.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  flag: boolean = false;
  pensionFollowUpType = [
    { code: 1, value: "במעקב נכות שנתי" },
    { code: 2, value: "במעקב נכות רפואי" },
    { code: 3, value: "במעקב נכות שנתי ורפואי" },
  ]
  canceledClaimStatus = 2;
  constructor(public vm: VmService) { }
  processModel: any = this.vm.processModel;
  ngOnInit(): void {

  }

  // רענן
  executeRefresh(): void {
    this.flag = true;
    this.claimRemarks()
  }

  // בודק לשים חריג
  hasIrragularMark() {
    return this.vm.processModel && this.vm.processModel.superClaim && this.vm.processModel.superClaim.irregularSuperClaimFlag === true;
  };

  // טענה הערות
  claimRemarks() {
    var text = "";
    if (this.flag)
      text = "חריגה";
    else {
      if (this.vm.processModel.superClaim && this.vm.processModel.superClaim.inquiryPorcessFlag) {
        text += "בירור";
        if (this.vm.processModel.superClaim.pensionFollowUpForInsuredType) {
          text += ", ";
        }
      }
    }
    return text;
  };
  // מספר התביעות
  // getClaims() {
  //   if (!this.vm.processModel.superClaim || !this.vm.processModel.superClaim.operativeClaims) { return ''; }
  //   var ParticipatingClaims = this.getParticipatingClaims(this.vm.processModel.superClaim.operativeClaims)
  //   return ParticipatingClaims ? ParticipatingClaims.map(function (claim) {
  //     return claim.company + "-" + claim.operativeClaimNum;
  //   }).join(",") : "אין תביעות משתתפות";
  // };

  // // לקבל תביעות משתתפות
  // getParticipatingClaims(operativeClaims: string) {
  //   return _.filter(operativeClaims, function (claim) {
  //     return claim.claimStatus.code !== canceledClaimStatus && testService.isParticipatingClaim(claim);
  //   })
  // }
  // יוזם
  // function initiate() {
  //   var x = 2;
  // }
  // initiate();
  // return {
  //     restrict: 'E',
  //     controller: ['$scope', '$q', '$filter', 'testService', controller],
  //     controllerAs: 'vm',
  //     bindToController: true,
  //     scope: {
  //         processModel: '=',
  //         refresh: '&'
  //     },
  //     template: require('!html-loader!./template.html')
  // };



}
