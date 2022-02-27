import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VmService {
  contactPersons: {
    id: number;
    deliveryFlag: boolean;
    type: { code: number; value: string; };
    firstName: string;
    lastName: string;
    identity: number;
    address: { homeNumber: number; cityName: string; streetName: string; };
    cellPhone: number;
    email: string;
  } = {
      id: 0,
      deliveryFlag: false,
      type: {
        code: 0,
        value: ''
      },
      firstName: '',
      lastName: '',
      identity: 0,
      address: {
        homeNumber: 0,
        cityName: '',
        streetName: ''
      },
      cellPhone: 0,
      email: ''
    };
  process = {
    processType: "AMBULATORY_HEALTH_CLAIM",
    processStatus: 1,
    superClaim: {
      inquiryPorcessFlag: true,
      irregularSuperClaimFlag: false,
      pensionFollowUpForInsuredType: 0,
      superClaimStatus: {
        code: 1,
        value: "פתוחה"
      },
      deathAfterDisabilityFlag: true,
      operativeClaims: [
        {
          operativeClaimNum: 123,
          company: 2,
          claimStatus: {
            code: 2,
            value: "פתוחה"
          },
          coverages: [
            {
              coverageNum: 1,
              claimParticipating: false
            },
            {
              coverageNum: 2,
              claimParticipating: false
            }
          ]
        }, {
          operativeClaimNum: 24531,
          company: 1,
          claimStatus: {
            code: 1,
            value: "מבוטלת"
          },
          coverages: [
            {
              coverageNum: 1,
              claimParticipating: true
            },
            {
              coverageNum: 2,
              claimParticipating: false
            }
          ]
        }
      ]
    },
    insured: {
      companyEmployer: true,
      position: "פקיד",
      identity: 27854122145,
      firstName: "מריה",
      lastName: "ג'יין",
      age: 35,
      lastJobDescription: "כללי - מקפת",
      smokingCode: 0,
      email: "NIKITA_JAIN@AMAT.COM",
      address: {
        cityName: "רעננה",
        streetName: "אחוזה",
        cellPhone: 544485236
      }
    },

  }
  count= 0;
  isToShow=true;
  processModel = {
    superClaim: {
      operativeClaims:'',
      pensionFollowUpForInsuredType:'',
      deathAfterDisabilityFlag:false,
      irregularSuperClaimFlag: false,
      inquiryPorcessFlag: {
        superClaimStatus: {
          value: ''
        }
      },
      superClaimStatus: {
        value: 'פתוחה'
      }
    }
  }
  claimRemarks() { };
  getClaims() { };
};
