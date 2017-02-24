import { AngularTwoProjectPage } from './app.po';

describe('angular-two-project App', () => {
  let page: AngularTwoProjectPage;

  beforeEach(() => {
    page = new AngularTwoProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
