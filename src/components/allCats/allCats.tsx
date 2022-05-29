import { FC, useEffect, useState } from "react"
import { useAppSelector, usePageScrollingPercent } from "../../app/hooks"
import { CatType } from "../../app/models/models"
import { catsAPI } from "../../app/servises/api"
import { Cat } from "../cat/cat"
import css from './allCats.module.css'

type AllCatsPropsType = {
    
}
export const AllCats: FC<AllCatsPropsType> = ({  }) => {
    
    const [cats, setCats] = useState<CatType[]>([])
    const scroll = usePageScrollingPercent()
    const favoriteCats = useAppSelector(state => state.FavouriteCatsReducer.cats)

    const startCats = catsAPI.useFetchAllCatsQuery(30)
    const [moreCats, {data}] = catsAPI.useFetchMoreCatsMutation()


    useEffect(() => {
        if  (scroll >= 95) {
            moreCats(15)
            if (cats != undefined && data != undefined) {
                setCats([...cats, ...data])
            }
        }
    }, [scroll])

    return <>
        <main className={css.allCatsContainer}>
            {startCats.data?.map(el => <Cat 
                    isFavorite={favoriteCats.includes(el)} 
                    catContent={el}
                    key={el.id}
                />)}
            {cats?.map(el => <Cat 
                    isFavorite={favoriteCats.includes(el)} 
                    catContent={el}
                    key={el.id}
                />)}
        </main>
    </>
}