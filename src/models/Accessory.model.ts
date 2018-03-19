// Accessory
// An Accessory is a generic device connected to the gateway. It can have several sub-devices, such as
//
// Light
// Sensor
// Plug
// Switch (no known devices exist) although all currently known devices only have a single sub-device.
// The properties available on an Accessory are:
//
// name: string - The name of this accessory as displayed in the app. Defaults to the model name.
// createdAt: number - The unix timestamp of the creation of the device. Unknown what this is exactly.
// instanceId: number - The ID under which the accessory is known to the gateway. Is used in callbacks throughout the library.
// type: AccessoryTypes - The type of the accessory: remote (0), lightbulb (2) or motionSensor (4). Currently only lightbulbs contain meaningful information.
// deviceInfo: DeviceInfo - Some additional information about the device in form of a DeviceInfo object (see below)
// alive: boolean - Whether the gateway considers this device as alive.
// lastSeen: number - The unix timestamp of the last communication with the gateway.
// lightList: Light[] - An array of all lights belonging to this accessory.
// plugList: Plug[] - An array of all plugs belonging to this accessory.
// sensorList: Sensor[] - An array of all sensors belonging to this accessory.
// switchList: any[] - An array of all switches belonging to this accessory. Unsupported atm.
// otaUpdateState: number - Unknown. Might be a boolean
