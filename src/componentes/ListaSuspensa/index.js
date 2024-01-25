import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.item)

    return (
        <div className='lista-supensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select> 
        </div>
    )
}

export default ListaSuspensa