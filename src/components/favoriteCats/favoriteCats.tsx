import { FC } from "react"
import { useAppSelector } from "../../app/hooks"
import { Cat } from "../cat/cat"
import css from './favoriteCats.module.css'

type FavoriteCatsPropsType = {
    
}
export const FavoriteCats: FC<FavoriteCatsPropsType> = ({  }) => {

    const {cats} = useAppSelector(state => state.FavouriteCatsReducer)

    return <>
        <main className={css.favoriteCatsContainer}>
            {cats?.map(el => <Cat 
                    isFavorite={true} 
                    catContent={el}
                    key={el.id}
                />)}
        </main>
    </>
}