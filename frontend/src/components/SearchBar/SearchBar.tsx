import type { CardType } from "../../types/cardType";
import Logo from "../../assets/eneba.png";
import SearchIcon from "../../assets/icons8-search.svg";
import XIcon from "../../assets/x-button.png";
import LithuniaIcon from '../../assets/lithuania.png';
import Heart from '../../assets/favorite-3-32.png';
import Cart from '../../assets/shopping-cart-32.png'
import Account from '../../assets/user-4-32.png'

const SearchBar = ({query, setQuery}: {
  query: string;
  setQuery: (value: string) => void;
  results: CardType[];
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="eneba" className="w-50" />

        <div className="relative w-150">
          <div className="p-4 text-white border">
            <input
              className="pl-15 border-none outline-none focus:outline-none focus:ring-0 w-125 text-xl font-semibold"
              type="text"
              placeholder="Search by title"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setQuery(query)}>
              <img src={SearchIcon} alt="Search" className="h-8" />
            </button>

            {query.length > 0 && (
              <button className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setQuery('')}>
              <img src={XIcon} alt="Clear" className="h-4" />
            </button>
            )}
          </div>

          {/* {query.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-purple-500 text-white z-50">
              {results.map((item) => (
                <div key={item.id} className="p-2 flex w-full hover:bg-purple-600">
                  <img src={item.imageUrl} alt="Cover" className="h-25" />
                  <h2 className="items-center justify-center">{item.title}</h2>
                </div>
              ))}
            </div>
          )} */}
        </div>

        <div className="flex pl-5 gap-3">
          <img src={LithuniaIcon} alt="Region"  />
          <p className="text-white">English EU | EUR</p>
        </div>

        <div className="ml-20 flex gap-5 ">
          <button className="cursor-pointer">
            <img src={Heart} alt="Likes" className="h-6"/>
          </button>
          <button className="cursor-pointer">
            <img src={Cart} alt="Cart" className="h-6" />
          </button>
          <button className="cursor-pointer">
            <img src={Account} alt="Account" className="h-6"/>
          </button>
          
        </div>
        
      </div>
    </div>
    );
  };

export default SearchBar;
