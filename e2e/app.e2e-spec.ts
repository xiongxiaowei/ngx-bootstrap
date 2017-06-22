import { NgxbootstrapPage } from './app.po';

describe('ngxbootstrap App', () => {
  let page: NgxbootstrapPage;

  beforeEach(() => {
    page = new NgxbootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
