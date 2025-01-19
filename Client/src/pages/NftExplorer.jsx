import React from 'react';
import './NftExplorer.css'; // Import the external CSS file
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

const NftExplorer = () => {
  return (
    <div className="nft-explorer">
      {/* Grid container for images */}
      <div className="nft-grid">
        <NFTCard 
          alt="Woodie #5988" 
          src={img1} 
          name="Woodie #5988" 
          price="2.5 ETH" 
          profit={2100} 
        />
        <NFTCard 
          alt="CryptoSerg #358" 
          src={img2} 
          name="CryptoSerg #358" 
          price="3.0 ETH" 
          profit={1800} 
        />
        <NFTCard 
          alt="CryptoSerg #626" 
          src={img3} 
          name="CryptoSerg #626" 
          price="4.0 ETH" 
          profit={1750} 
        />
        <NFTCard 
          alt="Sneaky Vampire #8334" 
          src={img4} 
          name="Sneaky Vampire #8334" 
          price="5.2 ETH" 
          profit={1500} 
        />
        <NFTCard 
          alt="Zero [Genesis]" 
          src={img5} 
          name="Zero [Genesis]" 
          price="6.0 ETH" 
          profit={1430} 
        />
        <NFTCard 
          alt="Yacht 2799" 
          src={img6} 
          name="Yacht 2799" 
          price="7.5 ETH" 
          profit={900} 
        />
        <NFTCard 
          alt="Unknown NFT" 
          src={img7} 
          name="Unknown NFT" 
          price="1.8 ETH" 
          profit={526} 
        />
      </div>
      {/* Address text */}
      <div className="nft-address">0xaB...011a</div>
    </div>
  );
};

const NFTCard = ({ alt, src, name, price, profit }) => {
  return (
    <div className="nft-card">
      <img
        aria-hidden="true"
        alt={alt}
        src={src}
        className="nft-image"
      />
      <div className="nft-name">{name}</div>
      <div className="nft-price">{`Price: ${price}`}</div>
      <div className="nft-profit">{`+${profit}% Profit`}</div>
    </div>
  );
};

export default NftExplorer;
