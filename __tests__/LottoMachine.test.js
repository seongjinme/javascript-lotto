import LottoMachine from '../src/domain/LottoMachine';
import { SETTING } from '../src/constant/setting';

describe('[LottoMachine] 로또 번호 발행 기능 테스트', () => {
  test('인자로 넘어온 금액에 해당하는 숫자 만큼의 로또 번호들을 발행해야 한다.', () => {
    // given
    const purchaseAmount = 5000;

    // when
    const lottoMachine = new LottoMachine(purchaseAmount);
    const lottoNumbersList = lottoMachine.getLottoNumbersList();

    // then
    expect(lottoNumbersList.length).toBe(purchaseAmount / SETTING.LOTTO_PRICE);
  });
});
