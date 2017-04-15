import { SmstFrontEndPage } from './app.po';

describe('smst-front-end App', () => {
  let page: SmstFrontEndPage;

  beforeEach(() => {
    page = new SmstFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
