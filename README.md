# fcpedia

# FCPedia ( Football Club Wikipedia )

#### Getting Started

Welcome to the Footbal Wikipedia API.

All API can be accessed from `http://localhost:3000/`

To use the API endpoints, the format is as follows :

`http://localhost:3000/{resource}`

#### GET  /clubs/{competition}

List of Competition :

- Bundesliga : {bundesliga}
- La Liga : {laliga}
- Serie A : {seria}
- English Premiere League : {premier}

> This will returns club by competition

```json
GET /clubs/premiere
status : 200


response : 
[
    {
        "id": 57,
        "area": {
            "id": 2072,
            "name": "England"
        },
        "name": "Arsenal FC",
        "shortName": "Arsenal",
        "tla": "ARS",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        "address": "75 Drayton Park London N5 1BU",
        "phone": "+44 (020) 76195003",
        "website": "http://www.arsenal.com",
        "email": "info@arsenal.co.uk",
        "founded": 1886,
        "clubColors": "Red / White",
        "venue": "Emirates Stadium",
        "lastUpdated": "2020-01-09T02:47:28Z"
    },
    {
        "id": 58,
        "area": {
            "id": 2072,
            "name": "England"
        },
        "name": "Aston Villa FC",
        "shortName": "Aston Villa",
        "tla": "AST",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
        "address": "Villa Park Birmingham B6 6HE",
        "phone": "+44 (0121) 3272299",
        "website": "http://www.avfc.co.uk",
        "email": null,
        "founded": 1872,
        "clubColors": "Claret / Sky Blue",
        "venue": "Villa Park",
        "lastUpdated": "2020-01-09T02:47:30Z"
    }
]
```



#### GET  /teams/{id}

> This will returns teams by Id

```json
GET /teams/12
status : 200


response :
{
    "id": 12,
    "area": {
        "id": 2088,
        "name": "Germany"
    },
    "activeCompetitions": [
        {
            "id": 2011,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "DFB-Pokal",
            "code": "DFB",
            "plan": "TIER_TWO",
            "lastUpdated": "2019-10-31T15:00:03Z"
        },
        {
            "id": 2002,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "Bundesliga",
            "code": "BL1",
            "plan": "TIER_ONE",
            "lastUpdated": "2019-12-23T15:45:01Z"
        }
    ],
    "name": "SV Werder Bremen",
    "shortName": "Bremen",
    "tla": "SVW",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg",
    "address": "Franz-Böhmert-Str. 1c Bremen 28205",
    "phone": "+49 (01805) 937337",
    "website": "http://www.werder.de",
    "email": "info@werder-online.de",
    "founded": 1899,
    "clubColors": "Green / White",
    "venue": "Weserstadion",
    "squad": [{.....}]
}
```

#### GET /players/{id}

> This will returns player by ID

```json
GET /players/3196
status : 200


response : 
{
    "id": 3196,
    "name": "David Silva",
    "firstName": "David Josué",
    "lastName": "???",
    "dateOfBirth": "1986-01-08",
    "countryOfBirth": "Spain",
    "nationality": "Spain",
    "position": "Midfielder",
    "shirtNumber": 21,
    "lastUpdated": "2019-09-19T03:16:36Z",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/David_Silva_2017.jpg/333px-David_Silva_2017.jpg"
}
```

#### GET /youtube/relevant/{search term}

> Return 5 Most Releveant VIdeos

```json
GET /youtube/relevant/Manchester United
status : 200


response : 
{
    "kind": "youtube#searchListResponse",
    "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/5UnCjs5MQgYd_3HLtoGmG9R2WR0\"",
    "nextPageToken": "CAUQAA",
    "regionCode": "ID",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/ozulCgDmthbAHkmVxdNQC0FgnYo\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "g_jvl9jIaAo"
            },
            "snippet": {
                "publishedAt": "2020-01-08T01:00:07.000Z",
                "channelId": "UCkzCjdRMrW2vXLx8mvPVLdQ",
                "title": "MAN UTD 1-3 MAN CITY | BERNARDO, MAHREZ, PEREIRA, RASHFORD | CARABAO CUP HIGHLIGHTS",
                "description": "SUBSCRIBE! http://www.youtube.com/subscription_center?add_user=mancity http://www.mancity.com http://www.facebook.com/mancity ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/g_jvl9jIaAo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/g_jvl9jIaAo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/g_jvl9jIaAo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Man City",
                "liveBroadcastContent": "none"
            }
        },... }]
}

```

### HTTP Error Code

Error Response :

- 404

  ```json
  {
      "message": "Request failed with status code 404"
  }
  ```

- 500

  ```json
  {
      "message": "Internal Server Error"
  }
  ```

  
