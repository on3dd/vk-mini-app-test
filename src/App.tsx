import React, { useEffect, SyntheticEvent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';
import bridge from '@vkontakte/vk-bridge';

import '@vkontakte/vkui/dist/vkui.css';

import StoreProvider from './utils/StoreProvider';
import { AppProvider } from './utils/contexts/AppContext';

import Home from './panels/Home';
import Albums from './panels/Albums';

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

  const togglePopout = (value: any) => {
    // setPopout(value);
  };

  const go = (e: SyntheticEvent<any>) => {
    // setActivePanel(e.currentTarget?.dataset.to);
  };

  const RouteHome = () => {
    return <Home id="home" />;
  };

  const RouteAlbums = () => {
    return <Albums id="albums" />;
  };

  return (
    <StoreProvider>
      <BrowserRouter>
        <AppProvider value={{ go, togglePopout }}>
          <Main>
            <Route path="/" exact component={RouteHome} />
            <Route path="/albums" component={RouteAlbums} />
          </Main>
        </AppProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
