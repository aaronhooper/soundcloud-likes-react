export default class SoundCloud {

  KEY         = 'YUKXoArFcqrlQn9tfNHvvyfnDISj04zk';
  BASE        = 'http://api.soundcloud.com';
  RESOLVE_URL = this.BASE + '/resolve';

  constructor(http) {
    this.http = http;
  }

  async getAllFavorites(profileUrl) {
    let target = this.createFavoritesUrl(profileUrl);

    const searchParams = new URLSearchParams({
      'limit': '200',
      'linked_partitioning': '1',
      'client_id': this.KEY,
    });

    const data = [];

    // use search params for first request
    // every subsequent request will use params from next_href
    let initialRequest = true;

    for (;;) {
      const json = await this.http.get(target, {
        searchParams: initialRequest ? searchParams : null,
      }).json();

      initialRequest = false;
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
      'client_id': this.KEY,
    });

    const json = await this.http.get(this.RESOLVE_URL, { searchParams }).json();
    return json.uri;
  }

  createFavoritesUrl(url) {
    return url + '/favorites';
  }
}
