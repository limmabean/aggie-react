interface Report {
  "veracity": string,
  "tags": string[],
  "smtcTags": string[],
  "hasSMTCTags": boolean,
  "read": boolean,
  "_sources": string[],
  "_media": string[],
  "_sourceNicknames": string[],
  "escalated": boolean,
  "_id": string,
  "_incident"?: string,
  "authoredAt": string,
  "fetchedAt": string,
  "content": string,
  "author": string,
  "metadata": any
  "url": string,
  "storedAt": string,
  "__v": number
}

interface Reports {
  "total": number,
  "results": Report[]
}

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
  "lastReportDate"?: string
}

interface Group {
  "tags": string[],
  "id"?: number,
  "smtcTags": string[],
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

interface Setting {
  "fetching"?: boolean,
  "email"?: {
    "from": string,
    "transport": {
      "method": string,
      "options":{
        "host": string,
        "port": string,
        "secure": boolean,
        "user": string,
        "pass": string
      }
    }
  },
  "elmo"?: string,
  "crowdtangle"?: {
    "apiToken": string,
    "baseUrl": string,
    "pathName": string,
    "count": number,
    "sortParam": string,
    "language": string,
    "zawgyiProb": number,
    "detectHateSpeech": boolean
  },
  "twitter"?: {
    "API_key": string,
    "API_key_secret": string,
    "access_token": string,
    "access_token_secret": string,
  }
  "setting": string
}