import type { CardType } from "../../types/cardType";
import Cashback from "../../assets/return-svgrepo-com.svg";
import Heart from '../../assets/heart.png'

const Card = ({ card }: {card: CardType}) => {
    return (
        <div className="text-white border border-[#63e3c2] cursor-pointer flex flex-col">
            <div className="relative w-full h-60 overflow-hidden bg-gray-900">
                <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 bg-black/80 w-full text-center backdrop-blur-sm py-0.5">
                    <p className="font-medium">{card.store}</p>
                </div>
                <div className="absolute flex bottom-9 bg-[#63e3c2] py-0.5 text-black items-center">
                    <img src={Cashback} alt="return" className="h-5 pl-2" />
                    <p className="font-extrabold text-[12px] pr-2 text-[#1f0a4d]">CASHBACK</p>
                </div>
            </div>
            
            <div className="bg-[#1f0a4d] p-2 flex flex-col gap-5 grow">
                <div>
                    <p className="font-semibold wrap-break-word">{card.title}</p>
                    <p className="text-[#23c299] text-sm font-medium">{card.region}</p>
                </div>
            
                <div>
                    {card.originalPrice === 0 ? '' : 
                      <p className="text-gray-400 text-sm font-medium">From 
                        <span className="line-through p-1">€{card.originalPrice}</span> 
                        <span className="text-green-400 font-medium">-{card.discountPercent}%</span>
                      </p> 
                    }
                    <p className="text-2xl">€{card.price}</p>
                    <p className="text-green-400 font-medium">Cashback: €{card.cashbackAmount.toFixed(2)}</p>
                    <div className="flex items-center gap-1">
                        <img src={Heart} alt="Wishlist" className="h-4"/>
                        <p>{card.likesCount}</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;