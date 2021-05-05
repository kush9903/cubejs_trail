cube(`Agentdetails`, {
  sql: `SELECT * FROM stats.agentdetails`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [aclid, aid, datejoining, dateresign, name, parentid]
    }
  },
  
  dimensions: {
    aclid: {
      sql: `${CUBE}.\`aclId\``,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    aid: {
      sql: `${CUBE}.\`aId\``,
      type: `string`
    },
    
    aref: {
      sql: `${CUBE}.\`aRef\``,
      type: `string`
    },
    
    auditCrby: {
      sql: `${CUBE}.\`audit.crBy\``,
      type: `string`,
      title: `Audit.crby`
    },
    
    auditUpby: {
      sql: `${CUBE}.\`audit.upBy\``,
      type: `string`,
      title: `Audit.upby`
    },
    
    contractor: {
      sql: `contractor`,
      type: `string`
    },
    
    datejoining: {
      sql: `${CUBE}.\`dateJoining\``,
      type: `string`
    },
    
    dateresign: {
      sql: `${CUBE}.\`dateResign\``,
      type: `string`
    },
    
    defmobilenumber: {
      sql: `${CUBE}.\`defMobileNumber\``,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    parent: {
      sql: `parent`,
      type: `string`
    },
    
    parentid: {
      sql: `${CUBE}.\`parentId\``,
      type: `string`
    },
    
    rolelevel: {
      sql: `${CUBE}.\`roleLevel\``,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    auditCrat: {
      sql: `${CUBE}.\`audit.crAt\``,
      type: `time`,
      title: `Audit.crat`
    },
    
    auditSyncat: {
      sql: `${CUBE}.\`audit.syncAt\``,
      type: `time`,
      title: `Audit.syncat`
    },
    
    auditUpat: {
      sql: `${CUBE}.\`audit.upAt\``,
      type: `time`,
      title: `Audit.upat`
    },
    
    weblogin: {
      sql: `${CUBE}.\`webLogin\``,
      type: `time`
    }
  },
  
  dataSource: `default`
});
