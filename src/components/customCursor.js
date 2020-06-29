import React, { useState, useEffect } from 'react'
import { Cursor } from '../styles/globalStyles'


const CustomCursor = () => {
    const [mousePosition, setmousePosition] = useState({
        x: 400,
        y: 400
    })

    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event;
        setmousePosition({ x, y })
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
         }
    }, [])
    return (
        <React.Fragment>
            <Cursor style={{left: `${mousePosition.x}px`,top:`${mousePosition.y}px`}} />
        </React.Fragment>
    )
}

export default CustomCursor;
