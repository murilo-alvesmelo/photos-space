import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import open from '../../assets/open.png'
import favorito from '../../assets/favorito.png'
export default function Galeria() {

    const[itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    const filtrarFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        })

        setItens(novasFotos)
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
            <ul className={styles.galeria__cards}>
                {itens.map((foto) => {
                    return (
                        <li key={foto.id} className={styles.galeria__card}>
                            <img
                                className={styles.galeria__imagem}
                                src={foto.imagem}
                                alt={foto.titulo}
                            />
                            <p className={styles.galeria__descricao}>{foto.titulo}</p>
                            <div>
                                <p>{foto.creditos}</p>
                                <span>
                                    <img src={open} alt='Ícone coracao de curtir' />
                                    <img src={favorito} alt='Ícone de abrir modal' />
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
