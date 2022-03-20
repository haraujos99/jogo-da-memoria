import './style.css';
import Card from './components/card-profile';

const users = [
  {
      name: 'Kevin Costa',
      account: '@costa',
      followers: 140,
      following: 207,
      profile: 'https://img.freepik.com/fotos-gratis/jovem-loira-bonita-impressionada-em-pe-em-vista-de-perfil-olhando-para-frente-fazendo-gesto-de-silencio-apontando-para-tras-isolada-na-parede-rosa_141793-110349.jpg?t=st=1646916141~exp=1646916741~hmac=da7f71b0d6e8f87d249395458d56abc10e912a92930f511cc07c93a71a33fe7d&w=826'
  },
  {
      name: 'Charles Santos',
      account: '@charles.santos',
      followers: 302,
      following: 419,
      profile: 'https://img.freepik.com/fotos-gratis/jovem-entregador-de-uniforme-vermelho-e-bone-impressionado-de-oculos-em-vista-de-perfil-estendendo-os-pacotes-de-pizza-para-a-frente-olhando-para-a-frente-isolado-na-parede-laranja_141793-109746.jpg?t=st=1646916104~exp=1646916704~hmac=bbc001ff85a5455926f0f31b5ce2992da6075a543a06c799fca06c9befa7278b&w=740'
  },
  {
      name: 'Anna Bia',
      account: '@anab',
      followers: 842,
      following: 150,
      profile: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?t=st=1646916110~exp=1646916710~hmac=00bb85fe9c4e511eafd617e5ebf7533fa706c6aabfd34100201f2d73f4985189&w=826'
  },
  {
      name: 'Mario Hisashi',
      account: '@hisashi',
      followers: 28,
      following: 17,
      profile: 'https://img.freepik.com/fotos-gratis/perfil-de-um-homem-barbudo-estiloso-que-fez-um-novo-penteado-na-barbearia_176420-18800.jpg?w=740'
  }
]

function App() {
  return (
    <div className="container">
      {users.map((user)=>{
         return <Card
          profilePic= {user.profile}
          name= {user.name}
          user= {user.account}
          followers={user.followers}
          following={user.following}
        />     
      })}
    </div>
  );
}

export default App;
