import { useCartContext } from '../../context/CartContext/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2/src/sweetalert2.js'


const CartForm = () => {

    const { cartList, totalPrice, emptyCart } = useCartContext()

    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const addOrder = () => {

        const order = {}
        order.buyer = dataForm
        order.price = totalPrice()
        order.items = cartList.map(prod => ({ id: prod.id, price: prod.precio, name: prod.modelo }))

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
            .then(resp => orderConfirmed(resp))
            .catch(err => console.log(err))
            .finally(() => emptyCart())
    }

    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const formValidation = (e) => {
        e.preventDefault()
        if (dataForm.name != '' && dataForm.phone != '' && dataForm.email != '') {
            addOrder(dataForm)
        } else {
            Swal.fire({
                title: 'Algo salio mal!',
                text: 'Por favor completa todos los campos correctamente',
                icon: 'error',
                confirmButtonText: 'Ok'
            }
            )
        }
    }


    const orderConfirmed = (order) => {
        Swal.fire({
            title: "Muchas gracias por tu compra!",
            text: `Disfrutala! El ID de tu compra es: ${order.id}`,
            icon: 'success'
        })
    }



    return (
        <div>
            <form>
                <input type="text" onChange={handleOnChange} value={dataForm.name} name='name' placeholder='ingrese su nombre' />
                <input type="text" onChange={handleOnChange} value={dataForm.phone} name='phone' placeholder='ingrese su telefono' />
                <input type="email" onChange={handleOnChange} value={dataForm.email} name='email' placeholder='ingrese su email' />
                <button onClick={formValidation}>Finalizar compra</button>
            </form>
        </div>
    )
}

export default CartForm
