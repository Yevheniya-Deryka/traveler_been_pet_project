/**
 * This file imports configuration objects from either the config.dev.js file
 * or the config.prod.js file depending on whether we are in __DEV__ or not.
 */
import BaseConfig from "./config.base"
import DevConfig from "./config.dev"
import ProdConfig from "./config.prod"

let ExtraConfig = ProdConfig

if (__DEV__) {
	ExtraConfig = DevConfig
}

const Config = { ...BaseConfig, ...ExtraConfig }

export default Config
