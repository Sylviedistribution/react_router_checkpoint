# 🎬 Movie App – React Router Checkpoint

This project is a small movie catalog application built with React. It allows users to add movies, browse them, filter them, and view a dedicated description page with an embedded trailer. The app also uses React Router for navigation and localStorage to persist movie data.

## 🚀 Features
### ✔️ Add Movies

Users can add a movie by providing:

Title

Description

Poster image (uploaded file)

Rating (from 1 to 5)

YouTube trailer link

All movies are saved in localStorage, ensuring they persist after page reloads.

### ✔️ Movie List Display

Each movie is displayed as a card with:

Poster

Title

Short description

Rating

Delete button

Clicking on a movie poster redirects to the movie's details page.

### ✔️ Search & Filter

In the header, the user can:

Search by title

Filter by minimum rating

Results update dynamically.

### ✔️ Movie Description Page

Each movie has its own page with:

Large poster

Full description

Rating

A YouTube trailer embedded directly using an iframe

A “Go Back” button to return to the home page

### ✔️ Routing

The app uses React Router:

/ → Movie list + Add movie button

/movie/:title → Movie details page

📁 Project Structure
src/
│ App.js
│ index.css
│ App.css
│
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── MovieList.js
│   ├── MovieCard.js
│   ├── FormMovie.js
│   └── DisplayMovie.js

## 🛠️ Technologies Used

React

React Router DOM

React-Bootstrap

localStorage

FileReader API (for poster upload)

▶️ How to Run the Project
npm install
npm start


The app runs on:

http://localhost:3000

📌 Note

Data persistence works only on the same browser thanks to localStorage.
