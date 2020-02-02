[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v4/ExtrinsicPayload"](../modules/_primitive_extrinsic_v4_extrinsicpayload_.md) › [ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)

# Class: ExtrinsicPayloadV4 <**S, T, V, E**>

**`name`** GenericExtrinsicPayloadV4

**`description`** 
A signing payload for an [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicPayloadV4**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#type)
* [blockHash](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#blockhash)
* [encodedLength](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#encodedlength)
* [era](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#era)
* [genesisHash](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#genesishash)
* [hash](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#hash)
* [isEmpty](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#isempty)
* [method](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#method)
* [nonce](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#nonce)
* [specVersion](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#specversion)
* [tip](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tip)

### Methods

* [eq](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#eq)
* [get](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#get)
* [getAtIndex](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#getatindex)
* [sign](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#sign)
* [toArray](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#toarray)
* [toHex](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tohex)
* [toJSON](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tojson)
* [toRawType](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#torawtype)
* [toString](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tostring)
* [toU8a](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tou8a)
* [typesToMap](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#static-typestomap)
* [with](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV4**(`registry`: Registry, `value?`: ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:20](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | ExtrinsicPayloadValue &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L160)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:32](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L32)*

**`description`** The block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:39](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L39)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *ExtrinsicEra*

___

###  genesisHash

• **get genesisHash**(): *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:46](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L46)*

**`description`** The genesis [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L184)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L145)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:53](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L53)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:60](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L60)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  specVersion

• **get specVersion**(): *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:67](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L67)*

**`description`** The specVersion for this signature

**Returns:** *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:74](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L74)*

**`description`** The tip [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L191)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:199](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L199)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L206)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  sign

▸ **sign**(`signerPair`: IKeyringPair): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:81](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L81)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | IKeyringPair |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L213)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L220)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L227)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:251](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L251)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L260)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:268](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L268)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:240](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*