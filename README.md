**MovieDB Web Application**

This is a MovieDB web application developed as part of an interview selection round. The project is a React.js application that fetches and displays movie data using the TMDB API. Below is a detailed description of the project.

Features

1. Responsive Design: The application is fully responsive and styled with decent CSS.

2. Pagination: Pagination is implemented for smooth navigation through large datasets.

3. Global State Management: As a developer with more than 6 months of experience, Redux was used for managing the global state.

4. Reusable Components: The project employs reusable components for modularity and maintainability.

5. Search Filter: A search bar is available in the Navbar to filter out movies by name.

6. Styling: Bootstrap is used for CSS styling, ensuring a clean and professional look.

7. Icons: React Icons were used to enhance the user interface.

**Pages**

1. Home Page / Popular Movie Page:

   -Displays a list of popular movies fetched from the API.
   -Each movie card includes the title, poster, and rating.

3. Top Rated Page:

  -Lists top-rated movies with the same layout as the Home Page.
  -Each movie card includes the title, poster, and rating.

3. Upcoming Movie Page:

  -Showcases upcoming movies with details fetched from the API.
  -Each movie card includes the title, poster, and rating.

4. Single Movie Detail Page:

  -Clicking on a movie card navigates to a detailed page for the selected movie.
  -Displays additional information such as overview, release date, and genres.

5. Searched Movie Page:

  -Displays search results for the query entered in the search bar.
  -The layout matches the Home Page.

**Technical Details**

-Tech Stack: React.js, Redux, Bootstrap, React Icons.

-State Management: Redux for managing global state.

-API Integration: TMDB API is used for retrieving movie data.

-Routing: React Router is used for navigation between different pages.

**Setup Instructions**

-Clone the repository to your local machine.

-Navigate to the project directory.

-Install dependencies using: npm install

-Start the development server: npm start

-Open http://localhost:3000 in your browser to view the app.

-Deployment: The project is hosted on CodeSandbox as per the interview instructions.
Additional Notes

-The color scheme and design are flexible and do not strictly match the provided screenshots.
