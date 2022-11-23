import React from "react";
import Astraly from "../../../../pages";
import Wallet from "../../../assets/icons/outline/Wallet.svg?inline";
import BaseButton from "../buttons/BaseButton";
import { WalletIcon } from "../Icons/Icons";
import WalletInformations from "../WalletInformations/walletInformations";

const ManageWalletModal = () => {
  return (
    <div className="modal flex-col gap-y-2 ">
      <div className="modal-box relative gap-y-4 justify-between">
        <div className="flex flex-row text-center items-center justify-start gap-x-4 pb-[30px]">
          <Wallet />
          <h3 className="font-Bold text-primaryDark font-bold text-[24px] text-xl tracking-wide">
            Manage wallets
          </h3>
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-6 top-6 bg-primary border-none hover:bg-white hover:text-black"
          >
            ✕
          </label>
        </div>
        <div className="flex">
          <BaseButton xSmall={true} className="px-4 text-[12px] py-0">
            LINK ANOTHER WALLET
          </BaseButton>
        </div>
      </div>

      <div className="modal-box relative flex-col">
        <WalletInformations
          isEth={true}
          EnsName="ASTRALY.ETH"
          link="https://etherscan.io/"
          balance="0.3"
          account="0xkmek1wke1e1231231"
        />
        <WalletInformations
          isEth={true}
          EnsName="ASTRALY.ETH"
          link="https://etherscan.io/"
          balance="0.3"
          account="0xkmek1wke1e1231231"
        />
      </div>
    </div>
  );
};

export default ManageWalletModal;
