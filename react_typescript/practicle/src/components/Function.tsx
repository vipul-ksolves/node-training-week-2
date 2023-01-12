import React from 'react'

interface UserMessage {
    name: string,
    message: string,
    age: number
}
// const Function = (props: { message: string }) => {
const Function = (props: UserMessage) => {

    const warning = (): void => {
        console.log("Warning")
    }
    warning()
    return (
        <div>
            <h1>Functions in typeScript</h1>
            <h2>{props.message},{props.age}</h2>
        </div>
    )
}


export default Function
