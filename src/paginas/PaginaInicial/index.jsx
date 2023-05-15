import './PaginaInicial.css'
import Cabecalho from '../../componentes/Cabecalho'
import Menu from '../../componentes/Menu'
import Banner from '../../assets/banner.png'

export default function PaginaInicial(){
    return(
        <div className='pagina-inicial'>
            <Cabecalho/>
            <main>
                <section className='pagina-inicial-principal'>
                    <Menu/>
                    <div className='pagina-inicial-principal-imagem'>
                        <img src={Banner} alt='Imagem da terra'/>
                    </div>
                </section>
            </main>
        </div>
    )
}