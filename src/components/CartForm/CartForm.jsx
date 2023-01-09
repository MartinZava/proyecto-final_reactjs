import { useCartContext } from '../../context/CartContext/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2/src/sweetalert2.js'
import "./CartForm.css"


const CartForm = () => {

    const { cartList, totalPrice, emptyCart } = useCartContext()

    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirm: ''
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
        if (dataForm.name != '' && dataForm.phone != '' && dataForm.email == dataForm.emailConfirm) {
            addOrder(dataForm)
        } else {
            Swal.fire({
                title: 'Algo salio mal!',
                html: '<span class="form__subtitle">Por favor completa todos los campos correctamente</span>',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'salmon',
                customClass: {
                    title: 'form__title',
                }
            }
            )
        }
    }




    const orderConfirmed = (order) => {
        Swal.fire({
            title: "Muchas gracias por tu compra!",
            html: `<span class="form__subtitle">Disfrutala! El ID de tu compra es: <strong>${order.id}</strong></span>`,
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: 'salmon',
            customClass: {
                title: 'form__title',
            }
        })
    }



    return (
        <div className='form'>
            <h2 className='form__title'>Termina tu compra!</h2>
            <h3 className='form__subtitle'>Ingresa tus datos </h3>
            <form className='form__flex'>
                <input className='form__input' type="text" onChange={handleOnChange} value={dataForm.name} name='name' placeholder='Ingrese su nombre' />
                <input className='form__input' type="text" onChange={handleOnChange} value={dataForm.phone} name='phone' placeholder='Ingrese su telefono' />
                <input className='form__input' type="email" onChange={handleOnChange} value={dataForm.email} name='email' placeholder='Ingrese su email' />
                <input className='form__input' type="email" onChange={handleOnChange} value={dataForm.emailConfirm} name='emailConfirm' placeholder='Confirme su email' />
                <button className='button hvr-grow-shadow' onClick={formValidation}>Finalizar compra</button>
            </form>
        </div>
    )
}

export default CartForm
