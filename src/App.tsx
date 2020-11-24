import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';
import bridge from '@vkontakte/vk-bridge';

import '@vkontakte/vkui/dist/vkui.css';

import StoreProvider from './utils/StoreProvider';

import Home from './panels/Home';
import Albums from './panels/Albums';
import Album from './panels/Album';
import Photos from './panels/Photos';
import Photo from './panels/Photo';

const Main = styled.main``;

const App: React.FC = () => {
  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }: any) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute(
          'scheme',
        );

        schemeAttribute.value = data.scheme
          ? data.scheme
          : 'client_light';

        document.body.attributes.setNamedItem(
          schemeAttribute,
        );
      }
    });
  }, []);

  return (
    <StoreProvider>
      <BrowserRouter>
        <Main>
          <Route
            path="/"
            exact
            component={() => <Home id="home" />}
          />
          <Route
            path="/albums"
            exact
            component={() => <Albums id="albums" />}
          />
          <Route
            path="/albums/:id"
            component={() => <Album id="album" />}
          />
          <Route
            path="/photos"
            exact
            component={() => <Photos id="photos" />}
          />
          <Route
            path="/photos/:id"
            component={() => <Photo id="photo" />}
          />
        </Main>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
