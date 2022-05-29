import { FC, useState } from "react"
import css from './header.module.css'
import { Link } from 'react-router-dom'

type HeaderPropsType = {
    
}
export const Header: FC<HeaderPropsType> = ({  }) => {

    const [active, setActive] = useState(1)

    return <header className={css.header}>
        <nav className={css.nav}>
            <Link className={`${css.link} ${active === 1 ? css.active : ''}`} 
                to={'../all'}
                onClick={() => setActive(1)}
                >Все котики</Link>
            <Link className={`${css.link} ${active === 2 ? css.active : ''}`} 
                to={'../favorite'}
                onClick={() => setActive(2)}
            >Любимые котики</Link>
        </nav>
    </header>
}