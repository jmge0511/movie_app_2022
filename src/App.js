function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4aBRBEMc36CPZmEg84X40wEsDI%26pid%3DApi&f=1',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.t0EoaEzeLC_kBW3Ha4u9EgHaF7%26pid%3DApi&f=1',
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.msp47D4NIaFD4Lxy2rvlUAHaE7%26pid%3DApi&f=1',
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mW17Z8uq6unL6xvle_X0YgHaHa%26pid%3DApi&f=1',
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8e2egDI0m8ecpvi5uMHoxAHaHa%26pid%3DApi&f=1',
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.name} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
