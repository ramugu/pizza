        // Array of JSON data
var pizzaDataArray = [
    {
        "imageSrc": "/assets/images/pizza-1.jpg",
        "title": "Italian Pizza",
        "price": "$20.00",
        "description": "A small river named Duden flows by their place and supplies"
    },
    {
        "imageSrc": "/assets/images/pizza-5.jpg",
        "title": "Hawaiian Special",
        "price": "$20.00",
        "description": "A small river named Duden flows by their place and supplies"
    },
     {
        "imageSrc": "/assets/images/pizza-2.jpg",
        "title": "Hawaiian Pizza",
        "price": "$20.00",
        "description": "A small river named Duden flows by their place and supplies"
    },{
        "imageSrc": "/assets/images/pizza-6.jpg",
        "title": "Ultimate Overload",
        "price": "$20.00",
        "description": "A small river named Duden flows by their place and supplies"
    },{
        "imageSrc": "/assets/images/pizza-3.jpg",
        "title": "Greek Pizza",
        "price": "$20.00",
        "description": "A small river named Duden flows by their place and supplies"
    },{
        "imageSrc": "/assets/images/pizza-7.jpg",
        "title": "Bacon Pizza",
        "price": "$20.00",
        "description": "A small river named Duden flows by their place and supplies"
    },{
        "imageSrc": "/assets/images/pizza-4.jpg",
        "title": "Bacon Crispy Thins",
        "price": "$20.00",
        "description": "A small river named Duden flows by their place and supplies"
    },{
        "imageSrc": "/assets/images/pizza-8.jpg",
        "title": "Ham & Pineapple",
        "price": "$20.00",
        "description": "A small river named Duden flows by their place and supplies"
    },
];

function createPizzaCards(dataArray) {
    var cardsContainer = document.getElementById("cardsContainer");

    for (var i = 0; i < dataArray.length; i++) {
        var data = dataArray[i];

        // Calculate the remaining space for underscores
        var remainingSpace = 60 - (data.title.length + data.price.length);
        var underscores = "_".repeat(Math.max(0, remainingSpace));

        // Create card HTML structure
        var card = document.createElement("div");
        card.classList.add("card0");
        card.style.maxWidth = "540px";
        card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-1">
                    <img src="${data.imageSrc}" class="rounded-circle" width="60" alt="...">
                </div>
                <div class="col-md-11 px-4 py-2">
                    <div class="card-body">
                        <h5 class="card-title text-white">${data.title} <span style="font-size: xx-small;">${underscores}</span><small class="ms-1 float-end">${data.price}</small></h5>
                        <p class="card-text text-white">${data.description}</p>
                    </div>
                </div>
            </div>
        `;

        // Append the card to the container
        cardsContainer.appendChild(card);
    }
}

// Call the function with the array of data
createPizzaCards(pizzaDataArray);
