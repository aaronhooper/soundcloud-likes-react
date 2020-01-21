export class SoundCloud {

  KEY         = 'YUKXoArFcqrlQn9tfNHvvyfnDISj04zk';
  BASE        = 'http://api.soundcloud.com';
  RESOLVE_URL = BASE + '/resolve';

  constructor(http) {
    this.http = http;
  }

  async getAllFavorites(profileUrl) {
    let target = this.createFavoritesUrl(profileUrl);

    const searchParams = new URLSearchParams({
      'limit': '200',
      'linked_partitioning': '1',
      'client_id': KEY,
    });

    const data = [];

    for (;;) {
      const json = await this.http.get(target, { searchParams }).json();
      data.push(json);
      if (!json.next_href) break;
      target = json.next_href;
    }

    const combined = data.reduce(
      (all, item) => all.concat(item.collection),
      []
    );

    return combined;
  }

  async resolve(url) {
    const searchParams = new URLSearchParams({
      'url': url,
      'client_id': key,
    });

    const json = await this.http.get(RESOLVE_URL, { searchParams }).json();
    return json.uri;
  }

  createFavoritesUrl(url) {
    return url + '/favorites';
  }
}
