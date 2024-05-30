import Card from './Card';
import './Dia.css'

function Dia(props){
    return(
        <div className='temperatura-dia'>
            <Card cidade={props.municipio} temperatura={props.temp} descricao={props.desc} icone={props.icon}></Card>
        </div>
    )
}

export default Dia;