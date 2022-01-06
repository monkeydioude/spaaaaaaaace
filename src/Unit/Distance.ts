import Config from "../Config"

const kilometreToPx = (distance: number): number => {
    return distance / Config.kmPerPx
}

const pxToKilometre = (px: number): number => {
    return px * Config.kmPerPx
}

export { kilometreToPx, pxToKilometre }