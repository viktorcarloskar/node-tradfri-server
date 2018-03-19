// Subscription starts with getting current value
// Pings for updated value every now and then

import { Observable } from 'rxjs';
import { TradfriClient, Accessory, AccessoryTypes } from "node-tradfri-client";

export class LightService{
  private identity: string;
  private psk: string;
  private tradfri: TradfriClient;

  constructor(private tradfriClient: TradfriClient) {
    this.tradfri = new TradfriClient("gw-abcdef012345");
  }

  private connect() {

  }

  private async setIdentityAndPsk(securityCode: string) {
    try {
        return await this.tradfri.authenticate(securityCode);
    } catch (e) {
        // handle error
    }
  }



}
