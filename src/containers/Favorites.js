
import { useStore } from '../hooks-store/store';
import './Favorites.css';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = props => {
  const state = useStore()[0];
  const dispatch = useStore()[1];
  const toggleAuthHandler = () => {
    dispatch('LOGIN');
  };
  const favoriteProducts = state.products.filter(
    p => p.isFavorite
  );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  if(!state.auth){
    content = <>
        <p className="placeholder">Login to see favorites!</p>
        <button className='login' onClick={toggleAuthHandler}>Login</button>
    </>
    ; 
  }
  return content;
};

export default Favorites;
