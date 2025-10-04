export default async function Details({ params }) {
  const param = await params.id;
  let book = await fetch("https://gutendex.com/books/" + param);
  book = await book.json();

  return (
    <>
      <div className="row">
        <div className="col-6">
          <img src={book.formats["image/jpeg"]} className="img-fluid"/>
        </div>
        <div className="col-5">
            <h1>{book.title}</h1>
            <p>{book.summaries}</p>
        </div>
        <h2></h2>
      </div>
    </>
  );
}
