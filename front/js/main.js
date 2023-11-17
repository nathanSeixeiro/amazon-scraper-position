document.getElementById("scrapeButton").addEventListener("click", async () => {
  const resultDiv = document.getElementById("result");
  const asin = document.getElementById("asinInput").value;
  const keyword = document.getElementById("keywordInput").value;
  const url = `http://localhost:3000/api/scrape?keyword=${keyword}&asin=${asin}`;
  try {
    const response = await fetch(url);
    const result = await response.json();

    // Check if the response status is OK, or else throw an error
    if (!keyword || !asin) {
      alert("Please enter a keyword and ASIN");
      return;
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    resultDiv.innerHTML = " ";
    const createProduct = (result) => {
      const resultTitle = truncateTitle(result.title, 4);

      // Create a Bootstrap card element
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "mb-4");

      // Create an image element within the card
      const img = document.createElement("img");
      img.src = result.imgURL;
      img.alt = result.title;
      img.classList.add("card-img-top");

      // Create a card body element within the card
      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.classList.add("card-body");

      // Create a text section element within the card body
      const textSection = document.createElement("div");
      title.classList.add("text-section");

      // Create a title element within the card body
      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = resultTitle;

      // Create a paragraph element within the card body
      const asinText = document.createElement("p");
      asinText.classList.add("card-text");
      asinText.textContent = `The product with ASIN ${result.asin} is found at positions: ${result.positions}`;

      // Append elements to build the card structure
      cardBodyDiv.appendChild(textSection);
      cardBodyDiv.appendChild(title);
      cardBodyDiv.appendChild(asinText);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);
      return cardDiv;
    };

    // Display the result on the page
    const product = createProduct(result);
    resultDiv.appendChild(product);
  } catch (error) {
    console.error("Error:", error);
    // Handle errors as needed
    document.getElementById("result").innerHTML =
      "An error occurred while show the product.";
  }
});

// for showing more friendly and shortly title
function truncateTitle(title, numberOfWords) {
  const words = title.split(" ");
  const truncatedTitle = words.slice(0, numberOfWords).join(" ");
  return truncatedTitle;
}
