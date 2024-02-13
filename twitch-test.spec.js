const { test } = require('@playwright/test');
const { TwitchPage } = require('./twitch-page');
const { TwitchAPI } = require('./twitch-api');
const twitch_api_url = 'https://api.twitch.tv/helix/games/top';
const twitch_ui_url = 'https://www.twitch.tv/directory?sort=VIEWER_COUNT';
const bearer_token = 'your token';
const client_id = 'your id';

test('lists should be equal', async ({ page, request }) => {
    const twitch_page = new TwitchPage(page);
    const twitch_api = new TwitchAPI(request, twitch_api_url, bearer_token, client_id);
    await twitch_page.goto(twitch_ui_url);
    const ui_list = await twitch_page.top_games_titles();
    const api_list = await twitch_api.get_api_top_games();
    await ui_list == api_list;
});