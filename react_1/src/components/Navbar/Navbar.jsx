import { useState } from 'react'
import './navbar.css'


export default ({items}) => {
  let [count, setCount] = useState(0)

  function handelClick() {
    count++
    setCount(count)
  }
  return (
      <nav>
        <div className="logo"></div>
        <ul>
          {items.map((item, i) => <li>{`${item} ${i+1}`}</li>)}
        </ul>
    <Button count={count} click={handelClick} />
    <Button count={count} click={handelClick} />
      </nav>
    )
}

function Button ({count, click}) {
  return (
    <button onClick={click}>{count}</button>
  )
}
