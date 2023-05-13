import styles from '../Menu/Menu.module.css';
import { Link } from 'react-router-dom';
import Redes from './Redes';


const Menu = () => {
    return(
        <header className={styles.header}>
            <span className={styles.logo}>LOGO</span>

            <nav className={styles.nav}>

              <Link to='/Portafolio-Plantilla-React/'><span>I</span>nicio</Link>

              <Link to='/Portafolio-Plantilla-React/proyectos'><span>P</span>royectos</Link>

              <Link to='/Portafolio-Plantilla-React/sobremi'><span>S</span>obreMi</Link>

            </nav>

            <nav className={styles.navMobile}>
                 
              <Link>
                <img src="" alt="" />
              </Link>


              <Link>
              <img src="" alt="" />
              </Link>


              <Link>
               <img src="" alt="" />
              </Link>

            </nav>


            <Redes/>
        </header>
    )
}

export default Menu;