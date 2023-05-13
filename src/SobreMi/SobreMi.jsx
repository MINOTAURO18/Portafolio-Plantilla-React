import styles from '../SobreMi/SobreMi.module.css'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
           <article className={styles.intro}>
                <div className={styles.img}></div>
                <p>Hola ¿Que tal?, Me llamo John Alexander Muñoz Yepez de Medellin-Colombia. Amante de la tecnología y los deportes, de este ultimo es de donde adquirí mi disciplina y constancia, ya que creo, que los deportes son la manera mas eficaz de desarrollar estas cualidades.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </article>

            <div className={styles.edu}>

                <h2>Educación</h2>

                <div>
                    <h3>Udemy</h3>
                    <span>React, Node.js, Javascript</span>
                </div>

                <div>
                <h3>Soy Henry</h3>
                    <span>React, Node.js, Javascript</span>
                </div>

                <div>
                <h3>Frecodecamp</h3>
                    <span>React, Node.js, Javascript</span>
                </div>

                <div>
                <h3>Universidad</h3>
                    <span>React, Node.js, Javascript</span>
                </div>

            </div>
        </section>
    )
}

export default SobreMi;