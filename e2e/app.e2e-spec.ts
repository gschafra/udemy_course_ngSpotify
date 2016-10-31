import { UdemyCourseNgSpotifyPage } from './app.po';

describe('udemy-course-ng-spotify App', function() {
  let page: UdemyCourseNgSpotifyPage;

  beforeEach(() => {
    page = new UdemyCourseNgSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
