import React, { useCallback } from 'react';
import { useStore } from '../../stores/provider';
import { observer } from 'mobx-react';

function IpAddress() {
  const store = useStore();
  const { ipAddress } = store;
  const fetchIP = useCallback((evt) => {
    evt.preventDefault();
    ipAddress.fetchIpAddress();
  }, []);

  return (
    <section className="ip-address">
      <h2 className="section-title">Your IP Address</h2>
      <p className="current-ip">Your IP Address is: {store.isLoading ? 'Loading...' : ipAddress.ipAddress}</p>
      <button onClick={fetchIP}>Check IP</button>
    </section>
  );
}

export default observer(IpAddress);
