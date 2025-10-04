import './footer.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
export default () => {
  return (
    <footer>
      <div className="card left">
        <img src={icon1}/>
        <h4>Free shiping method</h4>
        <p>lorem ipsum balh belh phosicdd</p>
        <p>pandatic some ipsum </p>
      </div>

      <div className="card left">
        <img src={icon2}/>
        <h4>Free shiping method</h4>
        <p>lorem ipsum balh belh phosicdd</p>
        <p>pandatic some ipsum </p>
      </div>

      <div className="card left">
        <img src={icon3}/>
        <h4>Free shiping method</h4>
        <p>lorem ipsum balh belh phosicdd</p>
        <p>pandatic some ipsum </p>
      </div>
    </footer>
  )
}
