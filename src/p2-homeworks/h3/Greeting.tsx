import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input// need to fix with (?:)
    const errorClass = error ? s.errorText : ''
    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyDown={onEnter}
            />
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={errorClass}>{error}</div>
        </div>
    )
}

export default Greeting
