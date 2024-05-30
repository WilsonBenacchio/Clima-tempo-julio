const obterTemp = () =>{

  fetch('https://api.openweathermap.org/data/2.5/weather?q=São Paulo&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638')
    .then(resposta =>{
      // console.log(resposta)
      return resposta.json()
    })
      .then(dados =>{
        console.log(dados)


      })
      .catch(erro => {
        console.log(erro)
      })

};
