import Card from "./Card";
import './Semana.css'
import { useState, useRef } from "react";

export default function Semana(props){

    const [temp, setTemp] = useState('50º');
    const [cidade, setCidade] = useState('São Paulo');
    const [desc, setDesc] = useState('Descrição');
    const inputRef = useRef(null);

    function obterTemp() {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`)
          .then(resposta =>{
            // console.log(resposta)
            return resposta.json()
          })
            .then(dados =>{
                console.log(dados)
                setCidade(dados.name);
                setTemp(dados.main.temp);
                setDesc(dados.weather[0].description);
      

                // console.log(cidade, temp, desc);
            })
            .catch(erro => {
            //   console.log(erro)
            })
      
      };
      

    return(
        <div className='diariamente'>
            <h2>Diariamente</h2>
            <div className='temperatura-semana'>
                
                <div className='pesquisa'>
                    <input
                        type='text'
                        placeholder='buscar cidade'
                        id='inputa'
                        ref={inputRef}
                        onChange={((evento) => {
                            setCidade(evento.target.value)
                        })}
                    />
                    
                </div>


                <button onClick={obterTemp}>APERTE</button>

                <Card cidade={cidade} temperatura={temp} descricao={desc} />
            </div>
        </div>  
    )
}
