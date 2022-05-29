import { FC } from "react"
import css from './cat.module.css'

type CatPropsType = {
    url: string,
    isFavorite: boolean
}
export const Cat: FC<CatPropsType> = ({ url, isFavorite }) => {
    return <div className={css.cat}>
        <img src={url} alt='cat' className={css.img} />
    </div>
}