const SETTING = {
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_LENGTH: 6,
  LOTTO_PRICE: 1_000,
  RESTART_COMMAND: 'y',
  EXIT_COMMAND: 'n',
};

const RANKING = {
  FIRST: { NAME: 'FIRST', MATCHING_COUNT: 6, REWARD: 2_000_000_000 },
  SECOND: { NAME: 'SECOND', MATCHING_COUNT: 5, REWARD: 30_000_000 },
  THIRD: { NAME: 'THIRD', MATCHING_COUNT: 5, REWARD: 1_500_000 },
  FOURTH: { NAME: 'FOURTH', MATCHING_COUNT: 4, REWARD: 50_000 },
  FIFTH: { NAME: 'FIFTH', MATCHING_COUNT: 3, REWARD: 5_000 },
};

export { SETTING, RANKING };