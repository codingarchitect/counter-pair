import { CounterPairPage } from './app.po';

describe('counter-pair App', () => {
  let page: CounterPairPage;

  beforeEach(() => {
    page = new CounterPairPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
