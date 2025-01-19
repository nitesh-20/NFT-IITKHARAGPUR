// client/src/services/alchemyService.js
import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: 'mxi771gYCFVVF_UL6KJjeBKlCHEV9TIf',  // Replace with your Alchemy API key
  network: Network.ETH_MAINNET,     // Choose the network (Mainnet or Testnet)
};

const alchemy = new Alchemy(settings);

const getNftsForWallet = async (walletAddress) => {
  try {
    const nfts = await alchemy.nft.getNftsForOwner(walletAddress);
    return nfts.ownedNfts;
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    return [];
  }
};

export default {
  getNftsForWallet,
};
