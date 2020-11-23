import React, {
  useState,
  useEffect,
  SyntheticEvent,
} from 'react';

import bridge from '@vkontakte/vk-bridge';

import { User, Popout } from '@test';

import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import StoreProvider from './utils/StoreProvider';
import { AppProvider } from './utils/contexts/AppContext';

import Home from './panels/Home';
import Albums from './panels/Albums';

const App: React.FC = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setUser] = useState(null as User);
  const [popout, setPopout] = useState(
    (<ScreenSpinner />) as Popout,
  );

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

    fetchData();
  }, []);

  const fetchData = async () => {
    const user = await bridge.send('VKWebAppGetUserInfo');

    setUser(user);
    setPopout(null);
  };

  const togglePopout = (value: Popout) => {
    setPopout(value);
  };

  const go = (e: SyntheticEvent<any>) => {
    setActivePanel(e.currentTarget?.dataset.to);
  };

  return (
    <StoreProvider>
      <AppProvider value={{ go, togglePopout }}>
        <View activePanel={activePanel} popout={popout}>
          <Home id="home" fetchedUser={fetchedUser} />
          <Albums id="albums" />
        </View>
      </AppProvider>
    </StoreProvider>
  );
};

export default App;
