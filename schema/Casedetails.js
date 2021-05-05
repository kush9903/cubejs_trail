cube(`Casedetails`, {
  sql: `SELECT * FROM stats.casedetails`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [agentName, agrid, allocid, bankname, batchid, caseid, customerCustomerid, customerName, customerid, dpdondate, emistartdate, entityname, fatherspousename, lastpaidamount, lastpaymentdate, loandisbdate, offusaccopendate, overdueondate, repaymentinfoBenefeciaryaccName, repaymentinfoRepaybankname, sourcingrmname, fieldfollowupdate, followupdate, livedate]
    },
    
    totalreceiptamount: {
      sql: `${CUBE}.\`totalReceiptAmount\``,
      type: `sum`
    }
  },
  
  dimensions: {
    accno: {
      sql: `${CUBE}.\`accNo\``,
      type: `string`
    },
    
    additionalinfo: {
      sql: `${CUBE}.\`additionalInfo\``,
      type: `string`
    },
    
    agency: {
      sql: `agency`,
      type: `string`
    },
    
    agentAgentref: {
      sql: `${CUBE}.\`agent.agentRef\``,
      type: `string`,
      title: `Agent.agentref`
    },
    
    agentName: {
      sql: `${CUBE}.\`agent.name\``,
      type: `string`,
      title: `Agent.name`
    },
    
    agentSecondaryagent: {
      sql: `${CUBE}.\`agent.secondaryAgent\``,
      type: `string`,
      title: `Agent.secondaryagent`
    },
    
    agentType: {
      sql: `${CUBE}.\`agent.type\``,
      type: `string`,
      title: `Agent.type`
    },
    
    agrid: {
      sql: `${CUBE}.\`agrId\``,
      type: `string`
    },
    
    agrref: {
      sql: `${CUBE}.\`agrRef\``,
      type: `string`
    },
    
    allocend: {
      sql: `${CUBE}.\`allocEnd\``,
      type: `string`
    },
    
    allocid: {
      sql: `${CUBE}.\`allocId\``,
      type: `string`
    },
    
    allocstart: {
      sql: `${CUBE}.\`allocStart\``,
      type: `string`
    },
    
    amtpenalty: {
      sql: `${CUBE}.\`amtPenalty\``,
      type: `string`
    },
    
    anchor: {
      sql: `anchor`,
      type: `string`
    },
    
    applicanttype: {
      sql: `${CUBE}.\`applicantType\``,
      type: `string`
    },
    
    aref: {
      sql: `${CUBE}.\`aRef\``,
      type: `string`
    },
    
    assetdetails: {
      sql: `${CUBE}.\`assetDetails\``,
      type: `string`
    },
    
    auditAllocatedby: {
      sql: `${CUBE}.\`audit.allocatedBy\``,
      type: `string`,
      title: `Audit.allocatedby`
    },
    
    auditCrby: {
      sql: `${CUBE}.\`audit.crBy\``,
      type: `string`,
      title: `Audit.crby`
    },
    
    auditSourcedat: {
      sql: `${CUBE}.\`audit.sourcedAt\``,
      type: `string`,
      title: `Audit.sourcedat`
    },
    
    auditSourcedby: {
      sql: `${CUBE}.\`audit.sourcedBy\``,
      type: `string`,
      title: `Audit.sourcedby`
    },
    
    auditSourcingflag: {
      sql: `${CUBE}.\`audit.sourcingFlag\``,
      type: `string`,
      title: `Audit.sourcingflag`
    },
    
    auditUpby: {
      sql: `${CUBE}.\`audit.upBy\``,
      type: `string`,
      title: `Audit.upby`
    },
    
    banking: {
      sql: `banking`,
      type: `string`
    },
    
    bankname: {
      sql: `${CUBE}.\`bankName\``,
      type: `string`
    },
    
    batchid: {
      sql: `${CUBE}.\`batchId\``,
      type: `string`
    },
    
    batchno: {
      sql: `${CUBE}.\`batchNo\``,
      type: `string`
    },
    
    businesslob: {
      sql: `${CUBE}.\`businessLob\``,
      type: `string`
    },
    
    campaign: {
      sql: `campaign`,
      type: `string`
    },
    
    caseid: {
      sql: `${CUBE}.\`caseId\``,
      type: `string`
    },
    
    casestage: {
      sql: `${CUBE}.\`caseStage\``,
      type: `string`
    },
    
    casetype: {
      sql: `${CUBE}.\`caseType\``,
      type: `string`
    },
    
    chassisno: {
      sql: `${CUBE}.\`chassisNo\``,
      type: `string`
    },
    
    cibilscore: {
      sql: `${CUBE}.\`cibilScore\``,
      type: `string`
    },
    
    colender: {
      sql: `${CUBE}.\`coLender\``,
      type: `string`
    },
    
    collstatus: {
      sql: `${CUBE}.\`collStatus\``,
      type: `string`
    },
    
    collsubstatus: {
      sql: `${CUBE}.\`collSubStatus\``,
      type: `string`
    },
    
    consolbranch: {
      sql: `${CUBE}.\`consolBranch\``,
      type: `string`
    },
    
    consolzone: {
      sql: `${CUBE}.\`consolZone\``,
      type: `string`
    },
    
    contractor: {
      sql: `contractor`,
      type: `string`
    },
    
    curmoncollection: {
      sql: `${CUBE}.\`curMonCollection\``,
      type: `string`
    },
    
    currentemi: {
      sql: `${CUBE}.\`currentEmi\``,
      type: `string`
    },
    
    currentled: {
      sql: `${CUBE}.\`currentLed\``,
      type: `string`
    },
    
    currentlsd: {
      sql: `${CUBE}.\`currentLsd\``,
      type: `string`
    },
    
    currentmobileno: {
      sql: `${CUBE}.\`currentMobileNo\``,
      type: `string`
    },
    
    currentoffuspos: {
      sql: `${CUBE}.\`currentOffUsPos\``,
      type: `string`
    },
    
    currentoffusvintage: {
      sql: `${CUBE}.\`currentOffUsVintage\``,
      type: `string`
    },
    
    currentroi: {
      sql: `${CUBE}.\`currentRoi\``,
      type: `string`
    },
    
    cust: {
      sql: `cust`,
      type: `string`
    },
    
    customerAccno: {
      sql: `${CUBE}.\`customer.accNo\``,
      type: `string`,
      title: `Customer.accno`
    },
    
    customerCustomerid: {
      sql: `${CUBE}.\`customer.customerId\``,
      type: `string`,
      title: `Customer.customerid`
    },
    
    customerName: {
      sql: `${CUBE}.\`customer.name\``,
      type: `string`,
      title: `Customer.name`
    },
    
    customerid: {
      sql: `${CUBE}.\`customerId\``,
      type: `string`
    },
    
    custref: {
      sql: `${CUBE}.\`custRef\``,
      type: `string`
    },
    
    disbursedamount: {
      sql: `${CUBE}.\`disbursedAmount\``,
      type: `string`
    },
    
    dpdondate: {
      sql: `${CUBE}.\`dpdOnDate\``,
      type: `string`
    },
    
    dpdopening: {
      sql: `${CUBE}.\`dpdOpening\``,
      type: `string`
    },
    
    dpdstr: {
      sql: `${CUBE}.\`dpdStr\``,
      type: `string`
    },
    
    emiamt: {
      sql: `${CUBE}.\`emiAmt\``,
      type: `string`
    },
    
    emistartdate: {
      sql: `${CUBE}.\`emiStartDate\``,
      type: `string`
    },
    
    empbusentity: {
      sql: `${CUBE}.\`empBusEntity\``,
      type: `string`
    },
    
    entityname: {
      sql: `${CUBE}.\`entityName\``,
      type: `string`
    },
    
    escrow: {
      sql: `escrow`,
      type: `string`
    },
    
    exclusionremark: {
      sql: `${CUBE}.\`exclusionRemark\``,
      type: `string`
    },
    
    fatherspousename: {
      sql: `${CUBE}.\`fatherSpouseName\``,
      type: `string`
    },
    
    fieldfollowuppriority: {
      sql: `${CUBE}.\`fieldfollowUpPriority\``,
      type: `string`
    },
    
    followuppriority: {
      sql: `${CUBE}.\`followUpPriority\``,
      type: `string`
    },
    
    lastevent: {
      sql: `${CUBE}.\`lastEvent\``,
      type: `string`
    },
    
    lastpaidamount: {
      sql: `${CUBE}.\`lastPaidAmount\``,
      type: `string`
    },
    
    lastpaymentdate: {
      sql: `${CUBE}.\`lastPaymentDate\``,
      type: `string`
    },
    
    lastpaymentmode: {
      sql: `${CUBE}.\`lastPaymentMode\``,
      type: `string`
    },
    
    lender: {
      sql: `lender`,
      type: `string`
    },
    
    loandisbdate: {
      sql: `${CUBE}.\`loanDisbDate\``,
      type: `string`
    },
    
    loanduration: {
      sql: `${CUBE}.\`loanDuration\``,
      type: `string`
    },
    
    location: {
      sql: `location`,
      type: `string`
    },
    
    mindueamt: {
      sql: `${CUBE}.\`minDueAmt\``,
      type: `string`
    },
    
    modelmake: {
      sql: `${CUBE}.\`modelMake\``,
      type: `string`
    },
    
    module: {
      sql: `module`,
      type: `string`
    },
    
    odint: {
      sql: `${CUBE}.\`odInt\``,
      type: `string`
    },
    
    offertype: {
      sql: `${CUBE}.\`offerType\``,
      type: `string`
    },
    
    offusaccopendate: {
      sql: `${CUBE}.\`offUsAccOpenDate\``,
      type: `string`
    },
    
    offusproduct: {
      sql: `${CUBE}.\`offUsProduct\``,
      type: `string`
    },
    
    overdueondate: {
      sql: `${CUBE}.\`overdueOnDate\``,
      type: `string`
    },
    
    overdueopening: {
      sql: `${CUBE}.\`overdueOpening\``,
      type: `string`
    },
    
    pendingemi: {
      sql: `${CUBE}.\`pendingEMI\``,
      type: `string`
    },
    
    permanentmobileno: {
      sql: `${CUBE}.\`permanentMobileNo\``,
      type: `string`
    },
    
    pincode: {
      sql: `pincode`,
      type: `string`
    },
    
    product: {
      sql: `product`,
      type: `string`
    },
    
    ref1: {
      sql: `ref1`,
      type: `string`
    },
    
    ref2: {
      sql: `ref2`,
      type: `string`
    },
    
    region: {
      sql: `region`,
      type: `string`
    },
    
    remark: {
      sql: `remark`,
      type: `string`
    },
    
    repaymentinfoBenefeciaryaccName: {
      sql: `${CUBE}.\`repaymentInfo.benefeciaryAcc_Name\``,
      type: `string`,
      title: `Repaymentinfo.benefeciaryacc Name`
    },
    
    repaymentinfoBenefeciaryaccNo: {
      sql: `${CUBE}.\`repaymentInfo.benefeciaryAcc_No\``,
      type: `string`,
      title: `Repaymentinfo.benefeciaryacc No`
    },
    
    repaymentinfoOfficemobile: {
      sql: `${CUBE}.\`repaymentInfo.officeMobile\``,
      type: `string`,
      title: `Repaymentinfo.officemobile`
    },
    
    repaymentinfoRefUrl: {
      sql: `${CUBE}.\`repaymentInfo.ref_url\``,
      type: `string`,
      title: `Repaymentinfo.ref Url`
    },
    
    repaymentinfoReference2: {
      sql: `${CUBE}.\`repaymentInfo.reference2\``,
      type: `string`,
      title: `Repaymentinfo.reference2`
    },
    
    repaymentinfoReflender: {
      sql: `${CUBE}.\`repaymentInfo.refLender\``,
      type: `string`,
      title: `Repaymentinfo.reflender`
    },
    
    repaymentinfoRepaybankname: {
      sql: `${CUBE}.\`repaymentInfo.repayBankName\``,
      type: `string`,
      title: `Repaymentinfo.repaybankname`
    },
    
    repaymentinfoRepaymentifsccode: {
      sql: `${CUBE}.\`repaymentInfo.repaymentIfscCode\``,
      type: `string`,
      title: `Repaymentinfo.repaymentifsccode`
    },
    
    repostatus: {
      sql: `${CUBE}.\`repoStatus\``,
      type: `string`
    },
    
    reposubstatus: {
      sql: `${CUBE}.\`repoSubStatus\``,
      type: `string`
    },
    
    reviewflag: {
      sql: `${CUBE}.\`reviewFlag\``,
      type: `string`
    },
    
    revofferamtpreapp: {
      sql: `${CUBE}.\`revOfferAmtPreApp\``,
      type: `string`
    },
    
    riskbucket: {
      sql: `${CUBE}.\`riskBucket\``,
      type: `string`
    },
    
    riskranking: {
      sql: `${CUBE}.\`riskRanking\``,
      type: `string`
    },
    
    schemecode: {
      sql: `${CUBE}.\`schemeCode\``,
      type: `string`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    sourcingrmname: {
      sql: `${CUBE}.\`sourcingRmName\``,
      type: `string`
    },
    
    supportallocatedto: {
      sql: `${CUBE}.\`SupportAllocatedTo\``,
      type: `string`
    },
    
    telstatus: {
      sql: `${CUBE}.\`telStatus\``,
      type: `string`
    },
    
    telsubstatus: {
      sql: `${CUBE}.\`telSubStatus\``,
      type: `string`
    },
    
    totaltenor: {
      sql: `${CUBE}.\`totalTenor\``,
      type: `string`
    },
    
    vintageonus: {
      sql: `${CUBE}.\`vintageOnus\``,
      type: `string`
    },
    
    zone: {
      sql: `zone`,
      type: `string`
    },
    
    fieldfollowupdate: {
      sql: `${CUBE}.\`fieldfollowUpDate\``,
      type: `time`
    },
    
    followupdate: {
      sql: `${CUBE}.\`followUpDate\``,
      type: `time`
    },
    
    auditAllocatedat: {
      sql: `${CUBE}.\`audit.allocatedAt\``,
      type: `time`,
      title: `Audit.allocatedat`
    },
    
    auditCrat: {
      sql: `${CUBE}.\`audit.crAt\``,
      type: `time`,
      title: `Audit.crat`
    },
    
    auditUpat: {
      sql: `${CUBE}.\`audit.upAt\``,
      type: `time`,
      title: `Audit.upat`
    },
    
    livedate: {
      sql: `${CUBE}.\`liveDate\``,
      type: `time`
    }
  },
  
  dataSource: `default`
});
