import { Ziang2Page } from './app.po';

describe('ziang2 App', function() {
  let page: Ziang2Page;

  beforeEach(() => {
    page = new Ziang2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
