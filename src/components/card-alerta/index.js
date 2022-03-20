import './style.css';
import btnFechar from '../../assets/close-gray.svg';

export default function Card({icon, text, btn, azul}) {
    return (
        <div className="card-alerta">
            <img src={btnFechar} className="btn-fechar"/>
            <img src={icon} className="icon"/>
            <p className='texto-card'>{text}</p>
            {azul? <button className='btn-principal blue' >
                {btn}
            </button> : <button className='btn-principal red' >
                {btn}
            </button>}
        </div>
    )
}