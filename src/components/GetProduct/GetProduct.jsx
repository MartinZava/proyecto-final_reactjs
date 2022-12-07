import { productos } from "../../../helpers/gFetch"

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = productos.find(p => p.id === productos.id)
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}