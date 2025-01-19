import { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoAssets = () => {
  const [cryptoAssets, setCryptoAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState('inr');  // Default currency is INR

  // Function to handle currency change
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);  // Set currency to INR or USD based on user selection
  };

  useEffect(() => {
    const fetchCryptoAssets = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: currency,  // Use selected currency (INR or USD)
            ids: 'bitcoin,ethereum,xrp,tether,solana,binancecoin,dogecoin,usd-coin,cardano,tron',  // Coins you want to fetch
            order: 'market_cap_desc'  // Sort by market cap
          }
        });

        // Process and set the data
        setCryptoAssets(response.data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoAssets();
  }, [currency]);  // Fetch data again when the currency changes

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Crypto Assets</h1>

      {/* Currency Selector */}
      <div>
        <label htmlFor="currency">Choose Currency: </label>
        <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="inr">INR</option>
          <option value="usd">USD</option>
        </select>
      </div>

      {/* Crypto Table */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change (24h)</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoAssets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td>{asset.name}</td>
              <td>{asset.current_price}</td>
              <td>{asset.price_change_percentage_24h}%</td>
              <td>{asset.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoAssets;
