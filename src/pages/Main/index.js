import './style.css';
import cards from '../../cards'
import cardBack from '../../assets/memoria/card-back.png'
import endGame from '../../assets/memoria/congrats.png'
import { useState } from 'react'

function Main() {
  const [cardPack, setCardPack] = useState(cards);
  const endImage = document.querySelector('.congrats');
  console.log(endImage);

  const handleTurnCard = (card) =>{

     const localCards = [...cardPack];
     const findCard = localCards.find((item)=> item.id === card.id);

     const turnedCards = localCards.filter((item)=> item.turned);

     if(turnedCards.length > 1 ){
      return;
    }

    if(turnedCards.length && card.slug === turnedCards[0].slug){
      findCard.turned = true;    
      setCardPack(localCards);

      setTimeout(()=>{
        if(findCard.id === turnedCards[0].id){
          return; 
        }
  
        const newCardsPack = localCards.filter((item)=>
          item.id !== findCard.id && item.id !== turnedCards[0].id
        )
  
        setCardPack(newCardsPack);
        if(newCardsPack.length === 0){
          endImage.classList.remove('none');
        }

      }, 800);

      return;
    }
    if(turnedCards.length && card.slug !== turnedCards[0].slug){
      findCard.turned = true;    
      setCardPack(localCards);

      setTimeout(()=>{
        
        const cardTurned = localCards.find((item)=> item.id === turnedCards[0].id)
        findCard.turned = false;
        cardTurned.turned = false;
        setCardPack(localCards);  
      }, 800);
      return;
    }

    findCard.turned = true;    
    setCardPack(localCards);

    
  }
  const handleReset = () =>{
    const resetCards = cards.map((card)=>{
      return  {...card, turned: false}
    });
    setCardPack(resetCards);
    endImage.classList.add('none');
  }
  
  return (
    <div className='container flex-center'>

      <div className='sidebar'>
        <div className='icon'></div>
        <div className='reset-btn flex-center' onClick={()=>handleReset()}>
          <span>RESET</span>
        </div>
      </div>

      <div className='game'>
        <img src={endGame} className='congrats none'/>
        {cardPack.map((card)=>{
          return <img 
                  src={card.turned ? card.image : cardBack} 
                  onClick={()=>handleTurnCard(card)} 
                  key={card.id}/>
        })}
      </div>
    </div>
  );
}

export default Main;
