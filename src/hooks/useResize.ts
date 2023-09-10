import { useCallback, useEffect, useState } from "react"

export const useResize = (refComponent: React.RefObject<HTMLDivElement>) => {
    const [width, setWidth] = useState(0)

    const handleResize = useCallback(() => {
        if (refComponent.current) {
            setWidth(refComponent.current.clientWidth)
        }

    }, [refComponent])

    useEffect(() => {
        const initialWwidth = window.innerWidth;
        setWidth(initialWwidth)
    }, [])

    useEffect(() => {
        window.addEventListener('load', handleResize)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('load', handleResize)
        }
    }, [refComponent, handleResize])
    
    return { width }
}
