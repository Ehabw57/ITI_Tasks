import './content.css'
import produt1 from '../../assets/product1.png'
import produt2 from '../../assets/product2.png'
import produt3 from '../../assets/product3.png'

export default () => {
  return (
    <main>
    <h1>New Arriaval</h1>
      <section className="flex">
        <div className="card">
          <img src={produt1} />
          <h3>Thermal balh alah gloves</h3>
          <p>$45.32</p>
        </div>
        <div className="card">
          <img src={produt2} />
          <h3>Thermal balh alah gloves</h3>
          <p>$45.32</p>
        </div>
        <div className="card">
          <img src={produt3} />
          <h3>Thermal balh alah gloves</h3>
          <p>$45.32</p>
        </div>
      </section>
    </main>
  )
}
