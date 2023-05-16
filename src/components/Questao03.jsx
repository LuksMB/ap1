import { useEffect, useState } from "react"

export const Questao03 = () => {

//Aqui estão os hooks, onde o primeiro guardará os valores que serão mostrados no fim; o segundo tem o vetor de todas as populações; o terceiro tem o valor da média das populações; por fim, o quarto tem um vetor com os nomes das capitais.
    const [maiores, setMaiores] = useState([]);
    const [vetor, setVetor] = useState([]);
    const [media, setMedia] = useState(0);
    const [nomes, setNomes] = useState([]);

//Aqui é feita a promessa como solicitado
    const Promessa = new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(([
                        {"capital":["Dublin"],"population":4994724},
                        {"capital":["Nicosia"],"population":1207361},
                        {"capital":["Madrid"],"population":47351567}
                        ])
                        )
                    reject()
                }
                , 0
            )
        }
    )

    //Essa função trata a promessa e já executa os setters dos useStates, recuperando da promise os valores de nomes, populações, tirando a média e definindo os maiores.
    async function tratarPromessa() {
        try{
            const res = await Promessa;
            console.log(res)
            let vetor1 = [];
            let nomes1 = [];
            for (let i = 0; i < 3; i++){
                vetor1.push(res[i].population);
                nomes1.push(res[i].capital[0]);
            }
            setNomes(nomes1);
            setVetor(vetor1);
            setMedia(tirarMedia());
            definirMaiores();
            console.log(nomes)
        }catch(error){
            console.log("ERROR: " + error)
        }
    }

    //o useEffect só roda uma única vez para tratar a promessa
    useEffect(
        () => {
            tratarPromessa();

        }, []
    )
    
    //Essa função recebe o vetor de populações e seta a média das populações no hook
    const tirarMedia = () => {
        let media = 0;
        for (let i = 0; i < 3; i++){
            media += vetor[i];
        }
        media = media / 3;
        return media;
    }

    //Essa função pega os valores do vetor que são acima da média e então adicionam os respectivos nomes dessas capitais no vetor de maiores.
    const definirMaiores = () => {
        let maior = []
        for (let i = 0; i < 3; i++){
            if (vetor[i] >= media){
                maior.push(nomes[i]);
            }
        }
        setMaiores(maior);
    }

    //Por fim, o código roda e mostra as capitais com mais população que a média.
    return (
        <div>
            <h1>{maiores[0]}</h1>
        </div>
    )
}