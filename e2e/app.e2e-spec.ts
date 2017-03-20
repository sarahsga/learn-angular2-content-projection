import { CpDemoPage } from './app.po';

describe('cp-demo App', () => {
  let page: CpDemoPage;

  beforeEach(() => {
    page = new CpDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
