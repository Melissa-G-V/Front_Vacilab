
'use client'
import { Chart } from 'react-google-charts';
import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"
import styles from 'public/page.module.css'

export default function Estatisticas() {
    const [decks, setDecks] = useState([])
    const [cards, setCards] = useState([])


    const router = useRouter()
  
    useEffect(() => {
      async function getCards() {
        const response = await fetch("http://localhost:3004/Card")
        const dados = await response.json()
        setCards(dados)
      }
      async function getDecks() {
        const response = await fetch("http://localhost:3004/Deck")
        const dadosD = await response.json()
        setDecks(dadosD)
      }
      getDecks()
      getCards()
    }, [])


    const cardType = cards.map(card => ({ type: card.type}));
    const sumT = cardType.reduce((suming, card) => {
        suming[card.type] = (suming[card.type] || 0) + 1;
        return suming;
      }, {});
      const dataTypes = Object.entries(sumT).map(([type, sum]) => [type, sum]);

    const cardPow = cards.map(card => ({ type: card.type, power: card.power}));
      const sumP = cardPow.reduce((suming, card) => {
        suming[card.type] = (suming[card.type] || 0) + card.power;
        return suming;
      }, {});
    const dataP = Object.entries(sumP).map(([type, sum]) => [type, sum]);


    const cardDef = cards.map(card => ({ type: card.type, defence: card.defence}));
    const sumD = cardDef.reduce((suming, card) => {
      suming[card.type] = (suming[card.type] || 0) + card.defence;
      return suming;
    }, {});
    const dataD = Object.entries(sumD).map(([type, sum]) => [type, sum]);
    
      const data = [
        ["Type", "Sum Cartas"],
        ...dataTypes,
      ];
      
      const data2 = [
        ["Type", "Max Power"],
        ...dataP,
      ];

      const data3 = [
        ["Type", "Max Defence"],
        ...dataD,
      ];

      return(

    <div className='container-fluid'>
        <div className='row'>
            <div className='col-3'>
            <Chart
                    chartType="Table"
                    data={data}
                    width="80%"
                    height="400px"
                    legendToggle
                />
            </div>
            <div className='col-3'>
            <Chart
                    chartType="Table"
                    data={data2}
                    width="80%"
                    height="400px"
                    legendToggle
                />
            </div>
            <div className='col-3'>
            <Chart
                    chartType="Table"
                    data={data3}
                    width="80%"
                    height="400px"
                    legendToggle
                />
            </div>
        </div>
    </div>
      
      )
    }