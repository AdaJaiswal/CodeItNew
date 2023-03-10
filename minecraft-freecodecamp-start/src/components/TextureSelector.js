import { useEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore"
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "../images/images"
export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        wood,
        log,
    } = useKeyboard()
    const images = {
        dirt: dirtImg,
        grass: grassImg,
        glass: glassImg,
        wood: woodImg,
        log: logImg,
    }
    const textures = {
        dirt,
        grass,
        glass,
        wood,
        log,
    }
    useEffect(() => {
        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if (pressedTexture) {
            console.log("pressed", pressedTexture[0])
            setTexture(pressedTexture[0])
        }
    }, [setTexture, dirt, grass, glass, wood, log])
    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        setVisible(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])
    return visible && (
        <div className="absolute centered texture-selector">
            {Object.entries(images).map(([k, src]) => {
                return (
                    <img src={src} key={k}
                        className={`${k === activeTexture ? "active" : ""}`}
                        alt={k}
                    />
                )
            })}
        </div>
    )
}