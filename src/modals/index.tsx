import { ModalRoot } from "@itznevikat/router";
import { useCallback } from "react";
import ConnectWalletModal from "./connectWallet";

const ModalController = () => {
  const handleClose = useCallback(() => {
    console.log("Modal close");
  }, []);

  const handleClosed = useCallback(() => {
    console.log("Modal closed");
  }, []);

  return (
    <ModalRoot onClose={handleClose} onClosed={handleClosed}>
      <ConnectWalletModal nav="connectWallet" />
    </ModalRoot>
  );
};

export default ModalController;
