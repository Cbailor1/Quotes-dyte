$(document).ready(function () {
  // Function to handle the API call
  function callAPI(category) {
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
      headers: { "X-Api-Key": "jRGwLm7v8M7Fsp2ieyAwSA==0sGAt7xSaw4iy4QX" },
      contentType: "application/json",
      success: function (result) {
        // Display the result in the respective containers
        var quoteContainer = document.getElementById("quote-container");
        var authorContainer = document.getElementById("author-container");
        quoteContainer.innerHTML = "Quote: " + result[0].quote;
        authorContainer.innerHTML = "Author: " + result[0].author;
      },
      error: function (jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    });
  }

  // Get the buttons
  var buttonFunny = document.getElementById("api-button-funny");
  var buttonInspiration = document.getElementById("api-button-inspirational");
  var buttonBeauty = document.getElementById("api-button-beauty");
  var buttonHealth = document.getElementById("api-button-health");
  var buttonFriendShip = document.getElementById("api-button-friendship");
  var buttonBusiness = document.getElementById("api-button-business");

  // Add click event listeners to the buttons
  buttonFunny.addEventListener("click", function () {
    callAPI("funny");
  });

  buttonInspiration.addEventListener("click", function () {
    callAPI("inspirational");
  });

  buttonBeauty.addEventListener("click", function () {
    callAPI("beauty");
  });

  buttonHealth.addEventListener("click", function () {
    callAPI("health");
  });

  buttonFriendShip.addEventListener("click", function () {
    callAPI("friendship");
  });

  buttonBusiness.addEventListener("click", function () {
    callAPI("business");
  });
});
