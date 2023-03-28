import logo from '../../assets/logo.png'
import lupa from '../../assets/search.png'
import './Cabecalho.css'

export default function Cabecalho(){
    return(
        <header className='cabecalho'>
            <img src={logo} alt="logo photo space"/>
            <div className='cabecalho-container'>
                <input className='cabecalho-input' type="text" placeholder="Oque você procura?"/>
                <img src={lupa} alt="icone lupa"/>
            </div>
        </header>
    )
}