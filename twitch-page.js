exports.TwitchPage = class TwitchPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title_list = [];
  }

  async goto(link) {
    await this.page.goto(link);
  }
  
  async top_games_titles() {
    let title = String;
    let category_name = String;
    for (let i = 0; i < 20; i++) {
      title = "card-" + i
      category_name = await this.page.locator('[data-a-target=' + title + '] h2').textContent();
      this.title_list.push(category_name);
    };
    return this.title_list
  }
}