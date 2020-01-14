import { observable, action } from 'mobx';

export default class IpAddressStore {
  @observable ipAddress;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  async fetchIpAddress() {
    this.rootStore.setNetworkStatus('loading');

    try {
      const response = await fetch('https://api.ipify.org/?format=json');
      const { ip } = await response.json();
      this.setIpAddress(ip);
    } catch (err) {
      this.rootStore.setNetworkError(err);
    } finally {
      this.rootStore.setNetworkStatus('idle');
    }
  }

  @action clearIpAddress = () => {
    this.ipAddress = null;
  }

  @action setIpAddress = (addr) => {
    this.ipAddress = addr;
  };
}
