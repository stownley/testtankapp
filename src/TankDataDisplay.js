import React, { useState } from 'react';
import axios from 'axios';

const TankDataDisplay = () => {
  const [siteId, setSiteId] = useState('001');
  const [tank, setTank] = useState('1');
  const [tankData, setTankData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://tlsb60z39d.execute-api.ap-southeast-2.amazonaws.com/test/testtankdata`,
        {
          params: {
            siteId: siteId,
            tank: tank,
          },
        }
      );

      setTankData(response.data);
    } catch (error) {
      setError('Error fetching data. Please check the console for details.');
    }

    setIsLoading(false);
  };

  const handleFetch = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Tank Data Display</h1>
      <label>
        Site ID:
        <input
          type="text"
          value={siteId}
          onChange={(e) => setSiteId(e.target.value)}
        />
      </label>
      <label>
        Tank:
        <input
          type="text"
          value={tank}
          onChange={(e) => setTank(e.target.value)}
        />
      </label>
      <button onClick={handleFetch} disabled={isLoading}>
        Fetch Tank Data
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {tankData && (
        <div>
          <p>Site ID: {tankData.siteId}</p>
          <p>Type: {tankData.type}</p>
          <p>Volume: {tankData.volume}</p>
          <p>Ullage: {tankData.ullage}</p>
        </div>
      )}
    </div>
  );
};

export default TankDataDisplay;
