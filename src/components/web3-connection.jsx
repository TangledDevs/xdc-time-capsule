import { useContext } from "react";
import { ethers } from "ethers";
import { abi as contractABI } from "../abi/constants";
import { GlobalContext } from "../contexts/Context";
import { Button } from "./ui/button";

const contractAddress = "0x2Bb6E6CF90a5541d0225bd30037959C02b83a69d";

const Web3Connection = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const browserWalletConnect = async () => {
    try {
      console.log("Connecting to wallet...");

      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } else {
        throw new Error("Ethereum provider not detected");
      }

      const web3provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await web3provider.getNetwork();
      const chainId = network.chainId;

      console.log("Detected Chain ID:", chainId);

      if (chainId === 51) {
        console.log("Setting provider and contract...");

        dispatch({ type: "SET_WEB3", payload: web3provider });

        const signer = web3provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        dispatch({ type: "SET_CONTRACT", payload: contract });

        console.log("Connected successfully:", state);
      } else {
        throw new Error("Not connected to the XDC network");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  return <Button onClick={browserWalletConnect}>Connect Wallet</Button>;
};

export default Web3Connection;
