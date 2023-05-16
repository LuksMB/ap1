import { useState, useEffect } from "react"
import axios from "axios"

export const Questao02 = () => {
    
//Aqui é criado os hooks que vão ser utilizados, flag, que será um booleano que irá alternar ao pressionar o botão.
//Image, que vai segurar o sprite que vai ser mostrado na tela.
    const [flag, setFlag] = useState(true);
    const [image, setImage] = useState();

//Esse useEffect roda sempre que o valor de flag muda, caso seja verdadeiro ele recupera por meio do axios o sprite frontal do pokémon,
// caso contrário, flag seja falso, ele recupera o sprit traseiro do pokémon.
    useEffect(
        ()=>{
            if (flag){
                axios.get("https://pokeapi.co/api/v2/pokemon/quagsire")
                .then(
                    (response) => {
                        console.log(response.data)
                        setImage(response.data.sprites.front_default)
                    }
                )
            } else {
                axios.get("https://pokeapi.co/api/v2/pokemon/quagsire")
                .then(
                    (response) => {
                        setImage(response.data.sprites.back_default)
                    }
                )
            }
        }
        ,
        [flag]
    )

    //Por fim, o retorno dessa função é em jsx, mostrando o valor de image como uma imagem e um botão escrito virar que alterna o valor da flag sempre que clicado.
    return (
        <div>
            <img src={image} alt="pokemon" style={{ width: '200px', }}/>
            <button
                onClick={
                    () => {
                    flag?setFlag(false):setFlag(true);
                    }
                }   
            >
                Virar
            </button>
        </div>
    )
}