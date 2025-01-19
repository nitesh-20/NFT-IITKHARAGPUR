import React from 'react';
import './BuyTokens.css';

const BuyTokens = () => {
    return (
        <div className="buy-token-container">
            <h1 className="text-3xl font-bold mb-4">Pricing</h1>
            <div className="card-grid">
                <div className="pricing-card">
                    <h2 className="text-xl font-semibold">Pro</h2>
                    <p>10M tokens</p>
                    <p>Ideal for hobbyists and casual users for light, exploratory use.</p>
                    <p className="text-2xl font-bold">$20 / month</p>
                    <p>Billed monthly</p>
                    <div className="benefits">
                        <p>✔ Access to all basic features</p>
                        <p>✔ Per trade 10% profit boost</p>
                    </div>
                    <button className="card-button">Buy</button>
                </div>
                <div className="pricing-card">
                    <h2 className="text-xl font-semibold">Pro 50</h2>
                    <p>26M tokens</p>
                    <p>Designed for professionals who need to use Bolt a few times per week.</p>
                    <p className="text-2xl font-bold">$50 / month</p>
                    <p>Billed monthly</p>
                    <div className="benefits">
                        <p>✔ Advanced analytics dashboard</p>
                        <p>✔ Per trade 12% profit boost</p>
                    </div>
                    <button className="card-button">Buy</button>
                </div>
                <div className="pricing-card">
                    <h2 className="text-xl font-semibold">Pro 100</h2>
                    <p>55M tokens</p>
                    <p>Perfect for heavy users looking to enhance daily workflows.</p>
                    <p className="text-2xl font-bold">$100 / month</p>
                    <p>Billed monthly</p>
                    <div className="benefits">
                        <p>✔ Dedicated support</p>
                        <p>✔ Per trade 15% profit boost</p>
                    </div>
                    <button className="card-button">Buy</button>
                </div>
                <div className="pricing-card">
                    <h2 className="text-xl font-semibold">Pro 200</h2>
                    <p>120M tokens</p>
                    <p>Best for power users relying on Bolt as a core tool for continuous use.</p>
                    <p className="text-2xl font-bold">$200 / month</p>
                    <p>Billed monthly</p>
                    <div className="benefits">
                        <p>✔ Exclusive premium features</p>
                        <p>✔ Per trade 20% profit boost</p>
                    </div>
                    <button className="card-button">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default BuyTokens;
