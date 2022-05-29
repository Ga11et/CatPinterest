import { FC, useEffect, useState } from "react"
import { useAppSelector, usePageScrollingPercent } from "../../app/hooks"
import { CatType } from "../../app/models/models"
import { catsAPI } from "../../app/servises/api"
import { Cat } from "../cat/cat"
import css from './allCats.module.css'

type AllCatsPropsType = {
    
}
export const AllCats: FC<AllCatsPropsType> = ({  }) => {

    const [cats, setCats] = useState<CatType[]>()
    const [moreCats, {data}] = catsAPI.useFetchMoreCatsMutation()
    const { isLoading } = useAppSelector(state => state.CatReducer)
    // const scroll = usePageScrollingPercent()

    useEffect(() => {
        handleMoreCats()
    }, [])

    const handleMoreCats = () => {
        moreCats(15)
        if (cats != undefined && data != undefined) {
            setCats([...cats, ...data])
        }
    }

    // useEffect(() => {
    //     if  (scroll >= 95) {
            
    //     }
    // }, [scroll])

    return <>
        <main className={css.allCatsContainer}>
            {cats?.map(el => <Cat 
                    isFavorite={false} 
                    url={el.url}
                    key={el.id}
                />)}
            {isLoading ? <div>Loading</div> : <div>Loaded</div>}
            <button
                onClick={() => handleMoreCats()}
            >Загрузить еще</button>
        </main>
    </>
}