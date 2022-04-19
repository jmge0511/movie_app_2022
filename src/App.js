import PropTypes from "prop-types";

function Movie({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/10.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const movieILike = [
  {
    id: 1,
    name: '극한직업',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IaS20s9iBULNRVX9Bw55xwHaKj%26pid%3DApi&f=1',
    rating: 9.2
  },
  {
    id: 2,
    name: '신과함께-죄와 벌',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JzSk-FiaJ-oax4gvo34PXQAAAA%26pid%3DApi&f=1',
    rating: 8.7
  },
  {
    id: 3,
    name: '프린세스 다이어리',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F4TPgVxEKTXZ8KQzv9JOp956DOg6.jpg&f=1&nofb=1',
    rating: 8.0
  },
  {
    id: 4,
    name: '토이스토리',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2317BB3C5807252509&f=1&nofb=1',
    rating: 9.3
  },
  {
    id: 5,
    name: '키싱 부스',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fteaser-trailer.com%2Fwp-content%2Fuploads%2FThe-Kissing-Booth-movie-poster.jpg%3Fssl%3D1&f=1&nofb=1',
    rating: 7.6
  }
];

function App() {
  return (
    <div>
      {movieILike.map(content =>
        <Movie key={content.id} name={content.name} picture={content.image} rating={content.rating} />
        )}
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
