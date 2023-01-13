import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from '../context/ShoppingCartContext'
import formateCurrency from '../utilities/formateCurrency'


interface storeItemProps {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: storeItemProps) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(id);
    return (
        <>
            <Card className='h-100'>
                <Card.Img variant='top' src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='d-flex justify-content-between aline-items-baseline mb-4'>
                        <span className='fs-2'>{name}</span>
                        <span className='ms-2 text-muted'>{formateCurrency(price)}</span>
                    </Card.Title>
                    <div className='mt-auto'>
                        {quantity === 0 ?
                            (<Button className='w-100' style={{ gap: ".5rem" }} onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>)
                            : <div className="d-flex align-items-center flex-column">
                                <div className='d-flex align-items-center justify-content-center flex-row'>
                                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                    <span className='m-2'> {quantity} in Cart</span>
                                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                </div>
                                <Button onClick={() => removeFromCart(id)} className='mt-3' size="sm" variant='danger'>Remove</Button>
                            </div>
                        }
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default StoreItem
