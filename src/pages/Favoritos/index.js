import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';

function Favoritos() {
    return (
        <>

            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>

            <section className={styles.container}>
                {/* {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })
                } */

                }

                <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />

            </section>
        </>
    )
}

export default Favoritos;