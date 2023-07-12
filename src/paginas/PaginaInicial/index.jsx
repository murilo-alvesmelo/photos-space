import styles from './PaginaInicial.module.scss'

import Menu from '../../componentes/Menu'
import Cabecalho from '../../componentes/Cabecalho'
import Galeria from '../../componentes/Galeria'
import Populares from '../../componentes/Populares'

import Banner from '../../assets/banner.png'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <img src={Banner} alt='Imagem da terra' />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
        </>
    )
}