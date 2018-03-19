import http from 'http';
import SocketIO from 'socket.io';
import * as express from 'express'
import { TradfriClient, Accessory, AccessoryTypes } from "node-tradfri-client";

class App {
  public express
  public http
  public io

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
