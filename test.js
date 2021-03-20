import fetch from '/node_modules/node-fetch';

fetch("http://localhost:7540/coreservices/v1/cases/bulk/unassigned/ENTITY", {
    method: "GET",
    headers: {
        "Content-Type" : "application/json",
        "ghy-token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrb2Zvc3UiLCJpc3MiOiJTZXJ2ZXJBdXRoZW50aWNhdGlvbiIsImlhdCI6MTYxNjI0NzM2MywiZXhwIjoxNjE2MjkwNTYzfQ.3fBn9ZG_QR2N-Fgyi_EUhPDsjuieROqD5G3nOcvYYhqHS6ntIgFiDsrNeWvstboCqU6xhZQqvRvjf-AYoFt6Rg"
    }
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
    // showEntities(data.data)
})
.catch((error) => console.log(error));

// showEntities = data => {
//     const entityDiv = document.querySelector('#bulk-data');

//     data.forEach(entity => {
//         const entityElement = document.createElement('p');

//         entityElement.innerText = 'Entity Legal Name : ${entity.entityId}';

//         entityDiv.append(entityElement);
//     });

// }