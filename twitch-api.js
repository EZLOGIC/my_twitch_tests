exports.TwitchAPI = class TwitchAPI {

  /**
   * @param {import('@playwright/test').request} request
   * @param {import('@playwright/test').json} json
   */
  constructor(request, link, token, id) {
    this.request = request;
    this.link = link;
    this.token = token;
    this.id = id;
    this.title_list = [];
  }

  async get_api_top_games() {
    const result = await this.request.get(this.link, {
      headers: {
      'Authorization': 'Bearer ' + this.token,
      'Client-Id': this.id,
      }
    });
    const result_json = await result.json();
    const result_data = result_json["data"];
    for (const element of result_data) {
      this.title_list.push(element["name"]);
    }
    return this.title_list
  }
}