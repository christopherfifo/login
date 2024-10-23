import { useState } from "react"

export default function List() {

    const [lista] = useState([
        'mathues',
        'davi',
        'joao'
    ])

    const [user, setUser] = useState([
        {id: 0, name: 'mathues', age: 20},
        {id: 1,name: 'davi', age: 20},
        {id: 2,name: 'joao', age: 20}
    ]
    )

    const deleteUser = () => {
        const randomIndex = Math.floor(Math.random() * user.length)

        setUser((previUser) => {	

            return previUser.filter((user => user.id !== randomIndex))

    })
    }

    return (
        <>
        <h1>Lista de itens</h1>
        <ul>
            {lista.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <h1>Lista de usuarios</h1>
        <ul>
            {user.map((item) => (
                <li key={item.id}>{item.name} - {item.age}</li>
            ))}
        </ul>
        <button onClick={deleteUser}>deletar</button>
        </>
    )
}