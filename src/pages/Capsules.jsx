import { useContext, useState, useEffect } from "react";

import { GlobalContext } from "../contexts/Context";
// import OpenCapsule from "./OpenCapsule";

const Capsules = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const [tokenlist, setTokenlist] = useState([]);
  const [connecting, setConnecting] = useState(false);
  //   const [open, setOpen] = useState();

  useEffect(() => {
    const getTimeCapsuleList = async () => {
      let address = await (await state.provider.getSigner()).getAddress();
      setConnecting(true);
      const newtokenlist = [];
      var loop = true;
      for (var i = 0; loop; i++) {
        try {
          let tokenId = (
            await state.contract.tokenOfOwnerByIndex(address, i)
          ).toNumber();
          let dueDate = new Date(
            (await state.contract.dueDate(tokenId)).toNumber() * 1000
          );
          let creationDate = new Date(
            (await state.contract.creationDate(tokenId)).toNumber() * 1000
          );

          let title = await state.contract.viewTitle(tokenId);
          //   let data = await fetch(`https://ipfs.io/ipfs/${uri}`);
          //   let blob = await data.blob();
          //   let arrayBuffer = await blob.arrayBuffer();
          //   let title = String.fromCharCode.apply(
          //     null,
          //     new Uint16Array(arrayBuffer)
          //   );

          newtokenlist.push({
            id: tokenId,
            dueDate: dueDate,
            creationDate: creationDate,
            title: title,
          });
        } catch (err) {
          loop = false;
        }
      }
      setTokenlist(newtokenlist);
      setConnecting(false);
    };

    getTimeCapsuleList();
  }, [state]);

  if (connecting) {
    return <div>Loading</div>;
  }
  if (tokenlist.length <= 0) {
    return <div>No time capsules to display</div>;
  }
  return <div>Card</div>;
};

export default Capsules;
