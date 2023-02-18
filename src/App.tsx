import { useEffect, useMemo } from "react";
import {
  useAdaptivity,
  ViewWidth,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import { Match, Epic, View, push } from "@itznevikat/router";
import { setUserData } from "./reducers/app.reducer";
import BottomMenu from "./components/BottomMenu";
import MapPanel from "./panels/map.panel";
import ProfilePanel from "./panels/profile.panel";
import CreatorProfilePanel from "./panels/creatorprofile.panel";
import bridge from "@vkontakte/vk-bridge";
import { useDispatch } from "react-redux";
import { RootDispatch } from "./reducers/store";
import ModalController from "./modals";

import { goerli, mainnet, polygon } from "wagmi/chains";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

function App() {
  const { viewWidth } = useAdaptivity();
  const dispatch: RootDispatch = useDispatch();

  // Проверяем, на десктопе ли мы
  const isDesktop = useMemo(() => {
    if (!viewWidth) return false;
    return viewWidth >= ViewWidth.SMALL_TABLET;
  }, [viewWidth]);

  // Попауты
  const popout = useMemo(() => {
    return null;
  }, []);

  // Получаем данные пользователя
  useEffect(() => {
    bridge.send("VKWebAppGetUserInfo").then((data) => {
      dispatch(
        setUserData({
          firstName: data.first_name,
          lastName: data.last_name,
          avatar: data.photo_200,
        })
      );
    });
  }, []);

  const chains = [goerli, mainnet, polygon];

  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: import.meta.env.VITE_PROJECT_ID }),
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      projectId: import.meta.env.VITE_PROJECT_ID,
      version: "1",
      appName: import.meta.env.VITE_PROJECT_NAME,
      chains,
    }),
    provider,
  });

  const ethereumClient = new EthereumClient(wagmiClient, chains);

  // useEffect(() => {
  //   push("/?modal=connectWallet");
  // }, []);

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Match initialURL="/" fallbackURL="/">
          <SplitLayout modal={<ModalController />} popout={popout}>
            <SplitCol animate={!isDesktop} width="100%" maxWidth="100%">
              <Epic id="/" tabbar={<BottomMenu />}>
                <View id="/">
                  <MapPanel id="/" />
                  <ProfilePanel id="/profile" />
                  <CreatorProfilePanel id="/creatorProfile" />
                </View>
              </Epic>
            </SplitCol>
          </SplitLayout>
        </Match>
      </WagmiConfig>

      <Web3Modal
        projectId={import.meta.env.VITE_PROJECT_NAME}
        ethereumClient={ethereumClient}
      />
    </>
  );
}

export default App;
