"use client";
import { useRouter } from "next/navigation";
import style from "./books.module.css";
import { useEffect, useState } from "react";
export default function Books() {
  const router = useRouter();
  const [books, setBooks] = useState([])
 const loadBooks =  async () => {
    let newBooks = await fetch("https://gutendex.com/books/");
    newBooks = await newBooks.json();
    setBooks(newBooks.results)
  };

  useEffect(()=> {
    loadBooks()
  }, [])

  return (
    <>
      <h1>here is your boooks</h1>
      <div className={style.cardContainer}>
        {books.map((item, i) => (
          <div
            key={i}
            onClick={() => router.push(`/details/${item.id}`)}
            className={style.card}
          >
            <img src={item.formats["image/jpeg"]} />
            <p className={style.title}>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
