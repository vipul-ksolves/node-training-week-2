import React from 'react'
import { Card } from "react-bootstrap"
import formateCurrency from '../utilities/formateCurrency'

interface storeItemProps {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: storeItemProps) => {
    return (
        <>
            <Card>
                <Card.Img variant='top' src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='d-flex justify-content-between aline-items-baseline mb-4'>
                        <span className='fs-2'>{name}</span>
                        <span className='ms-2 text-muted'>{formateCurrency(price)}</span>
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default StoreItem
