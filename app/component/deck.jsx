'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


const Deck = ({deck, cards, deleting , favs}) => {
  const Deck_Cards = [deck.card_0, deck.card_1, deck.card_2,deck.card_3,deck.card_4,deck.card_5];
  const [DefValueSum, setDefValueSum] = useState(0);
  const [PowerValueSum, setPowerValueSum] = useState(0);
  useEffect(() => {
    const dfsum = Deck_Cards.reduce((sm, Deck_Cards_Id) => {
      const card = cards.find((card) => card.id === Deck_Cards_Id);
      return sm + (card ? card.defence : 0);
    }, 0);
    setDefValueSum(dfsum);

    const pwSum = Deck_Cards.reduce((sm, Deck_Cards_Id) => {
      const card = cards.find((card) => card.id === Deck_Cards_Id);
      return sm + (card ? card.power : 0);
    }, 0);
    setPowerValueSum(pwSum);
  }, [cards, Deck_Cards]);

  
  function isType(type){
    if(type == 'Malee'){
    return(
        <span>
        <span className="badge text-white bg-danger"> <i className="bi bi-universal-access text-white mx-2" style={{fontSize: 14}} title="Malee"></i>
Malee</span>
        </span>
    )
    }else if (type == 'Ranged'){
    return(
        <span>
        
        <span className="badge text-white bg-success"><i className="bi bi-arrow-through-heart-fill text-white mx-1" style={{fontSize: 14}} title="Ranged"></i>Ranged</span>
        </span>
    )
    }else{
        return(<span>

            <span className="badge text-white text-dark bg-primary">            <i className="bi bi-moon-stars-fill text-white mx-1" style={{fontSize: 14}} title="Mage"/>Mage</span>
            </span>)
    }
}



function isPow(power) {
  const p = power;
  const np = 30 - p;
  const icons = [];

  for (let i = 0; i < p; i++) {
    icons.push(
      <i
        className="bi bi-p-circle-fill text-danger "
        style={{ fontSize: 18 }}
        title="Power"
      ></i>
    );
  }
  for (let i = 0; i < np; i++) {
    icons.push(
      <i
        className="bi bi-p-circle text-white "
        style={{ fontSize: 18 }}
        title="Power"
      ></i>
    );
  }
  return(icons)
}


function isDef(power) {
  const d = power;
  const nd = 30 - d;
  const icons = [];

  for (let i = 0; i < d; i++) {
    icons.push(
      <i
        className="bi bi-shield-fill text-danger "
        style={{ fontSize: 18 }}
        title="Defence"
      ></i>
    );
  }
  for (let i = 0; i < nd; i++) {
    icons.push(
      <i
        className="bi bi-shield-slash text-white "
        style={{ fontSize: 18 }}
        title="Defence"
      ></i>
    );
  }
  return(icons)
}

async function del(id) {    
  const response = await fetch("http://localhost:3004/deck/"+id, {
    method: "DELETE"
  })
  const nwdata = decks.filter(deck => deck.id != id)
  setCards(nwdata)
}

function isFave(favorito, id){
  if(favorito){
  return(
      <i className="bi bi-trophy-fill" style={{fontSize: 16}} title="Favorito">
       Em Destaque</i>
      )
  }else{
  return(
      <i className="bi bi-lightbulb-off" style={{fontSize: 16}}
      title="Favorito"></i>
  )
  }
}




  //console.log(Deck_Cards)
    return (
<div className="col-6 my-2">
              <div className="my-2">
                <div className="card bg-dark">
                        <div className="card-header bg-dark text-white">
                            <h3>{deck.deckname}</h3> <span className="badge bg-dark  text-white">{isFave(deck.favor)}</span>
                        </div>
                        <ul className="list-group list-group-flush  text-white bg-dark">
                        
                            <li className="list-group-item   text-white bg-dark">
                              {Deck_Cards.map((Deck_Cards_Id, index) => {
                                const card = cards.find((card) => card.id === Deck_Cards_Id);
                                return <span key={Deck_Cards_Id} className='mx-2'>{isType(card ? card.type : "N/A")}</span>;
                              })}
                            </li>
                            
                            <li className="list-group-item  text-white bg-dark"> <h6>Max Power</h6> {isPow(PowerValueSum)}</li>
                            <li className="list-group-item  text-white bg-dark">
                            <h6>Max Defence</h6> 

                              {isDef(DefValueSum)}
                            </li>

                            <li className="list-group-item  text-white bg-dark">
                              {Deck_Cards.map((Deck_Cards_Id, index) => {
                                const card = cards.find((card) => card.id === Deck_Cards_Id);
                                return <span className='mx-2' key={Deck_Cards_Id}>{card ? card.name : "N/A"}</span>;
                              })}
                            </li>
                        </ul>
                        <div className="card-footer bg-dark">
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" 
                        onClick={() => {
                          deleting(deck.id);
                          window.location.reload();
                        }}
                        >Delete</button>
                        <button type="button" className="btn btn-secondary" onClick={() => {
                          favs(deck.id);
                          window.location.reload();
                        }}>Favorite</button>
                        </div>
                    </div>
                    </div>
                </div>
</div>
    );
  };
  
  export default Deck;
  