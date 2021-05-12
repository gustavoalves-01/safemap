import React from 'react';

import { Container } from './styles';

export function Sidebar() {
  return (
      <Container>
          
          <div className="place-details">
              <h1>Title</h1>
              <span id="address">Av. Brasil, 200 - Centro/SP</span>
              <span id="phone">(11) 4545-4545</span>
              <span id="category">Faculdade</span>
              <button id="route">ver rotas</button>
              <img src="https://storage.giracurso.com/source/imagem/1379/f_KiVbKEb56LUecI_M3u798WAJYOGzmGa3.jpg"/>
          </div>
          
      </Container>
  );
}

export default Sidebar;