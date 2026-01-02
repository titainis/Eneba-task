import type { CardType } from "../../types/cardType";

const Card = ({ card }: {card: CardType}) => {
    return (
        <div>
            <p>{card.title}</p>
            <img src={card.imageUrl} alt={card.title} />
            <p>{card.store}</p>
            <p>{card.price}</p>
        </div>
    )
}

export default Card;