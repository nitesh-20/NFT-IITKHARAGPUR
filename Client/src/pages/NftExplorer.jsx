import React from 'react';

const cardClass = "m-2 w-32 h-32 bg-card rounded-lg flex items-center justify-center";
const imageUrl = "https://openui.fly.dev/openui/150x150.svg?text=";

const NFTGallery = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-wrap justify-center">
        <NFTCard alt="" text="Woodie+%235988" />
        <NFTCard alt="CryptoSerg #358" text="CryptoSerg+%23358" />
        <NFTCard alt="CryptoSerg #626" text="CryptoSerg+%23626" />
        <NFTCard alt="Sneaky Vampire #8334" text="Sneaky+Vampire+%238334" />
        <NFTCard alt="Zero [Genesis]" text="Zero+[Genesis]" />
        <NFTCard alt="Yacht 2799" text="Yacht+2799" />
        <NFTCard alt="NFT Image" text="nft_image" />
      </div>
      <div className="mt-4 text-lg font-semibold text-primary">0xaB...011a</div>
    </div>
  );
};

const NFTCard = ({ alt, text }) => {
  return (
    <div className={cardClass}>
      <img aria-hidden="true" alt={alt} src={`${imageUrl}${text}`} />
    </div>
  );
};

export default NFTGallery;
