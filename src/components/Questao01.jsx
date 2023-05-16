import { useEffect, useState } from "react";

export const Questao01X = () => {

// Aqui é definido o Hook que irá ser alterado dentro do componente filho e o que indica a posição do maior no vetor de médias.
    const [vetorMedias, setVetorMedias] = useState([]);
    const [indMaior, setIndMaior] = useState(0);

// Essa função vai receber o vetor passado pelo componente filho, sendo enviado para ele a partir do props para que ele execute dentro do escopo do componente filho e o mesmo possa se comunicar com um hook do componente pai.    
    const receberVetorMedias = (vetor) => {
        setVetorMedias(vetor);
    }

// Essa função vai ser executada para que o hook obtenha o valor da maior média do vetor de médias recebido.
    const calcularMaior = (vetor = [0, 1, 2]) => {
        let maior = -1;
        let i_maior;
        for (let i = 0; i < 3; i++){
            if (vetor[i] > maior){
                maior = vetor[i];
                i_maior = i;
            }
        }
        setIndMaior(i_maior);
    }
    
    const correntistas= [
        { nome: "Sicrano", aplic: {pp: 856.4, rf: 50.4, cc: 34.0} },
        { nome: "Beltrano", aplic: {pp: 0.0, rf: 700.67, cc: 800} },
        { nome: "Fulano", aplic: {pp: 5000.00, rf: 0.0, cc: 500} }
    ]

// O código chama o componente filho passando como props tanto o vetor alvo e a função de receber o vetor de médias. Logo então, executa a função mostrarMaior com o estilo h1, retornando o nome do que tem a maior média do vetor.
    return (
        <div>
            <Questao01Y correntistas={correntistas} receberVetorMedias={receberVetorMedias}/>
        </div>
    )


} 

export const Questao01Y = ({correntistas, receberVetorMedias}) => {
//Aqui, após receber o vetor por props, as médias são criadas e então agrupadas em um vetor de médias.
    const media1 = (correntistas[0].aplic.pp + correntistas[0].aplic.rf + correntistas[0].aplic.cc) / 3;
    const media2 = (correntistas[1].aplic.pp + correntistas[1].aplic.rf + correntistas[1].aplic.cc) / 3;
    const media3 = (correntistas[2].aplic.pp + correntistas[2].aplic.rf + correntistas[2].aplic.cc) / 3;
    const vetor_medias = [media1, media2, media3];

    //Essa função é executada passando o vetor que entra como parâmetro para a função que foi recebida pelo componente pai para estabelecer a comunicação.
    const enviarVetor = (vetor) => {
        receberVetorMedias(vetor);
    };

// Como o único propósito do filho é passar dados, não é retornado nada para a tela quando executado e só roda a função enviarVetor passando o vetor de médias criado no momento que o componente é renderizado/chamado pelo componente pai.
    useEffect(
        () => {
            enviarVetor(vetor_medias)
        }
        , []
    )

    return(
        <>
            
        </>
        
        
    )
} 