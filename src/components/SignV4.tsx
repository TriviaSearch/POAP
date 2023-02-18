import { useSignTypedData } from "wagmi";
import { useEffect, useState } from "react";

const SignV4 = () => {
  const [tempShit, settempShit] = useState("");

  interface MyContractValues {
    minter: `0x${string}`;
    contractAddress: `0x${string}`;
  }

  interface IMessage {
    domain: {
      chainId: number;
      name: string;
      verifyingContract: `0x${string}`;
      version: string;
    };
    types: {
      POAPMint: [
        { name: "minter"; type: "address" },
        { name: "contractAddress"; type: "address" }
      ];
      EIP712Domain: [
        { name: "name"; type: "string" },
        { name: "version"; type: "string" },
        { name: "chainId"; type: "uint256" },
        { name: "verifyingContract"; type: "address" }
      ];
    };
    primaryType: string;
    value: MyContractValues;
  }
  const message: IMessage = {
    domain: {
      chainId: 5, //this
      name: "test1", //this
      verifyingContract: `0x${"09A8566D13a39036C5a6ED73b5dB998D576D3c2D"}`, //this
      version: "1",
    },
    types: {
      POAPMint: [
        { name: "minter", type: "address" },
        { name: "contractAddress", type: "address" },
      ],
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
    },
    primaryType: "POAPMint",
    value: {
      minter: `0x${"994fB7C0c2675da8CC6ed13f31781FA4393a6eCe"}`, //this msg.sender
      contractAddress: `0x${"09A8566D13a39036C5a6ED73b5dB998D576D3c2D"}`, //this
    },
  };

  const { data, isError, isLoading, isSuccess, signTypedData } =
    useSignTypedData(message);

  {
    useEffect(() => {
      if (!isSuccess || !data) {
        return;
      }
      console.log("DATA", data);
      settempShit(data);
    }, [isSuccess, data]);
  }

  return (
    <div>
      <p>{tempShit}</p>
      <div>
        <button disabled={isLoading} onClick={() => signTypedData()}>
          Sign typed data
        </button>
        {isError && <div>Error signing message</div>}
      </div>
    </div>
  );
};

export default SignV4;
