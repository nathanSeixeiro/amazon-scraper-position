# Amazon Product Scraper

This project is a simple web scraping application designed to determine the search position of a specific product on Amazon based on its ASIN (Amazon Standard Identification Number) and a keyword. The project consists of a Node.js backend responsible for web scraping and a user-friendly HTML/CSS/JavaScript frontend for interacting with the application.

For detailed information about the challenge and requirements, please [click here!](challenge.md)

<div align="center">
  <img src="./front/assests/amazon-scraper-print.jpeg" alt="print-screen" width="300" height="200">
<div>

## Technologies Used

- **Node.js**: The backend is built with Node.js, a JavaScript runtime that allows you to run server-side code.

- **Express.js**: An efficient Node.js web application framework used for setting up the server and defining routes.

- **Axios**: A promise-based HTTP client for making HTTP requests to fetch Amazon search results.

- **Cheerio**: A library for parsing and manipulating HTML content, used to extract data from the Amazon search results page.

- **CORS**: Middleware used to enable Cross-Origin Resource Sharing, allowing the frontend to make requests to the backend.

- **HTML, CSS, Bootstrap, JavaScript**: The frontend is built with these standard web technologies for creating a user-friendly interface.

## Running the Project

1. Clone the repository to your local machine.

2. Navigate to the project's root directory.

3. Install the project dependencies using the following command:

```bash
  npm install
```

4. Start the Node.js server using:

```bash
  npm run start
```

or

```bash
  npm run dev
```

5. Open a web browser and go to `http://localhost:3000/api/scrape` to access the application.

6. Enter a search keyword and the ASIN of the product you want to find. Click the "Check Position" button, and the search position will be displayed.

---

**Note**: The Amazon data policy notice us that they delimited the number of requests for segurance
and proteccion. For this maybe the code presents instability e doesn't work every time.

But I made a lots of requests and this works well when the requests are liberated!

Made &nbsp;by Nathan Seixeiro 👨‍💻 &nbsp;[See my LinkedIn](https://www.linkedin.com/in/nathan-seixeiro/)
