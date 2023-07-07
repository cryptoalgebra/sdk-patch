export const FACTORY_ADDRESS = '0x49218738CC8aB39a61546D446fc175BE2072EAB2'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';

export const POOL_INIT_CODE_HASH = '0xbce37a54eab2fcd71913a0d40723e04238970e7fc1159bfd58ad5b79531697e7'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOW = 500,
  MEDIUM = 500,
  HIGH = 500,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOW]: 60,
};

