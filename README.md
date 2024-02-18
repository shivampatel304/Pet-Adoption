# Pet Adoption Backend

## Overview

This backend application provides endpoints for managing pet information in a Pet Adoption system. It allows users to retrieve, add, update, and delete pet details.

## Endpoints

### 1. Get All Pet Information

- **Endpoint:**
GET http://localhost:3000/petAdoption/v1/petDetails


- **Description:**
Retrieves information for all pets in the database.

### 2. Enter New Pet Information

- **Endpoint:**
POST http://localhost:3000/petAdoption/v1/newPet


- **Description:**
Adds new pet information to the database.

- **Required Body:**
- JSON object following the schema mentioned below.

### 3. Delete Pet by ID

- **Endpoint:**
DELETE http://localhost:3000/petAdoption/v1/{id}


- **Description:**
Deletes a pet from the database based on the provided ID.

- **Required Parameter:**
- `{id}`: ID of the pet to be deleted.

### 4. Update Pet Information by ID

- **Endpoint:**
PATCH http://localhost:3000/petAdoption/v1/{id}


- **Description:**
Updates the information of a pet in the database based on the provided ID.

- **Required Parameters:**
- `{id}`: ID of the pet to be updated.
- JSON object in the request body with the updated information.

## Pet Information Schema

```json
{
"identity": {
  "petType": "Parrot",
  "breed": "African Grey",
  "name": "Rio"
},
"address": {
  "location": "789 Jungle Ave",
  "zipcode": "E6E 6E6"
},
"petInformation": {
  "coatLength": 0,
  "characteristics": ["Intelligent", "Talkative"],
  "trained": "Can mimic human speech",
  "health": ["Vaccinated", "Feather check"],
  "preferences": "Enjoys interaction and toys"
},
"image": "https://example.com/parrot-image.jpg",
"adoptionCost": 150,
"about": "Rio is an intelligent and talkative African Grey parrot looking for a home with engaging humans."
}
