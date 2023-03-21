import productList from '@/static/produse.json'
import {useState} from "react";

export default function Home() {
  const [products, setProducts] = useState([])
  const [produs, setProdus] = useState({
    nume: '',
    cantitate: '',
    pret: ''
  });

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        setProducts([...products, produs])
      }}>
        <label>Alege produsul:</label>
        <select
          name={'produs'}
          onChange={(e) => setProdus({...produs, nume: e.target.value})}
        >
          {productList.map(({name, value}, index) => (
            <option value={name} key={index}>{name}</option>
          ))}
        </select>
        <label>Pretul produsului:</label>
        <input
          type="number"
          name={'pret'}
          onChange={(e) => setProdus({...produs, pret: e.target.value})}
        />
        <label>Cantitatea:</label>
        <input
          type="number"
          name={'cantitate'}
          onChange={(e) => setProdus({...produs, cantitate: e.target.value})}
        />
        <button type={'submit'}>Add product</button>
        <input type={'reset'} value={'Reset'} onClick={() => setProdus({})}/>
      </form>

      <table>
        <thead>
        <tr>
          <td>Nr</td>
          <td>Numele produsului</td>
          <td>Pretul unei cantitati</td>
          <td>Numarul de cantitati</td>
          <td>Pret total</td>
        </tr>
        </thead>
        <tbody>
        {
          products.map((element, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{element.nume}</td>
              <td>{element.pret}</td>
              <td>{element.cantitate}</td>
              <td>{element?.pret && element?.cantitate ? element.pret*element.cantitate : '-'}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </>
  )
}
