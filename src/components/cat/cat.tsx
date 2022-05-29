import { FC } from "react"
import css from './cat.module.css'
import { ReactComponent as FavoriteSVG } from '../../assest/favorite.svg'
import { ReactComponent as FavoriteFullSVG } from '../../assest/favoriteFull.svg'
import { CatType } from "../../app/models/models"
import { useAppDispatch } from "../../app/hooks"
import { FavouriteCatsReducer } from "../../app/reducers/favoriteCatReducer"

type CatPropsType = {
    isFavorite: boolean
    catContent: CatType
}
export const Cat: FC<CatPropsType> = ({ catContent, isFavorite }) => {

    const {url} = catContent

    const dispatch = useAppDispatch()

    const favoriteClickHandler = () => {
        isFavorite 
            ? dispatch(FavouriteCatsReducer.actions.catDeleting(catContent))
            : dispatch(FavouriteCatsReducer.actions.catAdding(catContent))
    }

    return <div className={css.cat}>
        <img src={url} alt='cat' className={css.img} />
        <FavoriteSVG className={css.favorite} />
        <FavoriteFullSVG 
            className={`${css.favoritefull} ${isFavorite ? css.show : ''}`} 
            onClick={favoriteClickHandler}
        />
    </div>
}