import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  books: [
    { name: "Rich Dad Poor Dad", rating: "10/10" },
    { name: "Thinking : Fast and Slow", rating: "8.5/10" },
    { name: "Money or your LIFE", rating: "9/10" },
    { name: "Tuesdays with Morrie", rating: "9.5/10" },
    { name: "The Subtle art of not giving a fuck", rating: "10/10" },
    { name: "The Alchemist", rating: "7.5/10" },
    { name: "Quiet: The power of introverts", rating: "9/10" },
    { name: "Start with WHY", rating: "9.9/10" },
    { name: "MindSet", rating: "10/10" },
    { name: "The Defining Decades", rating: "10/10" }
  ],

  webSeries: [
    {
      name: "Tandav",
      rating: "5/5"
    },
    {
      name: "Breathe Into the shadows S1&2",
      rating: "4.5/5"
    },
    {
      name: "Kota Factory",
      rating: "4.5/5"
    },
    {
      name: "Aspirants",
      rating: "4.5/5"
    },
    {
      name: "Family Man S1&2",
      rating: "4.5/5"
    },
    {
      name: "JL50",
      rating: "4.5/5"
    },
    {
      name: "Asur",
      rating: "4.5/5"
    },
    {
      name: "Falcon & Winter Soldier",
      rating: "4.5/5"
    }
  ],
  movies: [
    {
      name: "Toofan",
      rating: "4.5/5"
    },
    {
      name: "Tholi Prema",
      rating: "4/5"
    },
    {
      name: "Rock On 2",
      rating: "5/5"
    },
    {
      name: "World Famous Lover",
      rating: "4/5"
    },
    {
      name: "The Tommorow's War",
      rating: "4/5"
    },
    {
      name: "Sherni",
      rating: "3/5"
    },
    {
      name: "Good Newwzz",
      rating: "3.5/5"
    },
    {
      name: "Dil Chahta Hai",
      rating: "5/5"
    },
    {
      name: "Mohabbatein",
      rating: "4.5/5"
    },
    {
      name: "Chak De India",
      rating: "5/5"
    },
    {
      name: "Inception",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("books");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 🎥lockedDown(2020-2021) </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
