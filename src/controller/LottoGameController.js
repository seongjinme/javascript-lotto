import { SETTING, RANKING } from '../constant/setting';
import LottoMachine from '../domain/LottoMachine';
import Lottos from '../domain/Lottos';
import OutputView from '../view/OutputView';
import InputController from './InputController';

class LottoGameController {
  #purchaseAmount;
  #lottos;

  async play() {
    this.#purchaseAmount = await InputController.inputPurchaseAmount();
    this.#createRandomLottos();

    const { winningNumbers, bonusNumber } = await InputController.inputWinningConditions();
    this.#lottosWinningResult(winningNumbers, bonusNumber);

    const restartCommand = await InputController.inputRestartCommand();
    this.#restartGame(restartCommand);
  }

  #createRandomLottos() {
    const lottoList = new LottoMachine(this.#purchaseAmount).getLottoNumbersList();
    this.#lottos = new Lottos(lottoList);
    OutputView.printPurchaseResult(lottoList);
  }

  #lottosWinningResult(winningNumbers, bonusNumber) {
    const winningResults = this.#lottos.getWinningResults(winningNumbers, bonusNumber);
    OutputView.printWinningResults(winningResults);
    OutputView.printProfitRate(this.#calculateProfitRate(winningResults));
  }

  #calculateProfitRate(winningResults) {
    const totalProfit = Object.entries(winningResults).reduce(
      (profit, [ranking, count]) => profit + RANKING[ranking].REWARD * count,
      0,
    );
    return ((totalProfit * 100) / this.#purchaseAmount).toLocaleString('ko-KR', { minimumFractionDigits: 1 });
  }

  #restartGame(restartCommand) {
    if (restartCommand === SETTING.RESTART_COMMAND) {
      this.play();
    }
    if (restartCommand === SETTING.EXIT_COMMAND) {
      OutputView.printExitMessage();
    }
  }
}

export default LottoGameController;
