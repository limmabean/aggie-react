
interface Source {
  "enabled": boolean,
  "unreadErrorCount": number,
  "tags": any,
  "_id": string,
  "media": string,
  "nickname": string,
  "user": {
    "_id": string,
    "username": string
  },
  "keywords"?: string,
  "__v": number,
  "lastReportDate": string
}

interface Group {
  "tags": Tag[],
  "id"?: number,
  "smtcTags": any[],
  "status": string,
  "veracity": string,
  "escalated": boolean,
  "closed": boolean,
  "public": boolean,
  "totalReports": number,
  "_id": string,
  "title": string,
  "assignedTo": {
    "_id": string,
    "username": string
  },
  "creator": {
    "_id": string,
    "username": string
  },
  "storedAt": string,
  "updatedAt": string,
  "idnum": number,
  "__v": number,
  "notes"?: string,
  "locationName": string
}

interface Groups {
  "total": number,
  "results": Group[]
}


interface User {
  "provider": string,
  "hasDefaultPassword": boolean,
  "role": string,
  "_id": string,
  "email": string,
  "username": string,
  "__v": number
}

interface Tag {
  "isCommentTag": boolean,
  "_id": string,
  "name": string,
  "color": string,
  "description": string,
  "user": {
    "_id": string,
    "username": string
  },
  "__v": number
}
