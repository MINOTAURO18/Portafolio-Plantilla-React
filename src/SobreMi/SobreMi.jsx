import styles from '../SobreMi/SobreMi.module.css'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
           <article className={styles.intro}>
                <div className={styles.img}></div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quis vitae eaque enim deserunt soluta animi culpa officiis veniam qui. Possimus et voluptatibus soluta quia rerum cumque ea numquam odio</p>
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