import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePageScrollingPercent = () => {

    const [percent, setPercent] = useState(0)

    const handlescroll = () => {
        const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100
        setPercent(+percent.toFixed(0))
    }

    useEffect(() => {
        window.addEventListener('scroll', handlescroll, {passive: true})
    }, [])

    return percent
}
