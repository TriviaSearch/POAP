import { ModalCard, ModalCardProps, Title } from "@vkontakte/vkui";
import { Web3Button } from "@web3modal/react";

const ConnectWalletModal = ({}: ModalCardProps) => {
  return (
    <ModalCard>
      <Title>Connect wallet modal</Title>
      <Web3Button />
    </ModalCard>
  );
};

export default ConnectWalletModal;
