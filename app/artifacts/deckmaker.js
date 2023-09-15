/// Ler quantos items existem dentro do json
/// A geração de cartas não pode superar X.id cartas.
/// Recebe uma lista dos ids das cartas. porque se for deletar uma carta 
/// e ele solicitar uma carta não existente pode dar erro

/// lista de id das cartas
export default function DeckGen(list) {

    if(list.length < 0){
        return (
            console.log('Não tem cartas')

        )
    }else{
        let arraycard  = response.map(function(value) {
            return value.id;
        });
        //var cardmin = Math.min.apply( null, arraycard );
        //var cardmax = Math.max.apply( null, arraycard );
        function getRandomCard (arraycard) {
            return arraycard[Math.floor(Math.random() * arraycard.length)];
        }
        return (
            getRandomCard()
        )

    }
}