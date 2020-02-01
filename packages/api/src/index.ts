// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { detectPackage } from '@polkadot/util';

let pkgJson;

try {
  pkgJson = require('./package.json');
} catch (error) {
  pkgJson = require('../package.json');
}

detectPackage(pkgJson);

export { Keyring } from '@polkadot/keyring';
export { WsProvider } from '@polkadot/rpc-provider';

export { default as ApiPromise } from './promise';
export { default as ApiRx } from './rx';
export * from './submittable';
