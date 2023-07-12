import logo from '../../assets/logo.png'
import lupa from '../../assets/search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="logo photo space"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="Oque você procura?"/>
                <img src={lupa} alt="icone lupa"/>
            </div>
        </header>
    )
}