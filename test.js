const fetch = require("node-fetch");

fetch("http://localhost:7540/coreservices/v1/cases/bulk/unassigned/ENTITY", {
    method: "GET",
    headers: {
        "Content-Type" : "application/json",
        "ghy-token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrb2Zvc3UiLCJpc3MiOiJTZXJ2ZXJBdXRoZW50aWNhdGlvbiIsImlhdCI6MTYxNjI0NzM2MywiZXhwIjoxNjE2MjkwNTYzfQ.3fBn9ZG_QR2N-Fgyi_EUhPDsjuieROqD5G3nOcvYYhqHS6ntIgFiDsrNeWvstboCqU6xhZQqvRvjf-AYoFt6Rg"
    }
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))