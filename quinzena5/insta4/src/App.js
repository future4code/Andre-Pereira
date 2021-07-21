import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import FotoAnderson from './img/anderson.jpeg';
import FotoAndre from './img/andre.jpeg'



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'André Luiz'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_200_200/0/1601901713243?e=1632355200&v=beta&t=TOp1AFF2YUZG6C3D-Spk5BEERn3uu0plYufOBHzztVo'}
          fotoPost={FotoAndre}
        />
        <Post
          nomeUsuario={'Anderson'}
          fotoUsuario={'https://avatars.githubusercontent.com/u/83857848?v=4'}
          fotoPost={FotoAnderson}
        />
      </MainContainer>
    );
  }
}

export default App;
