import { productos } from "../../../helpers/gFetch"

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = productos.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}