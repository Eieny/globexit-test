class HttpClient {
  private BASE_URL = process.env.REACT_APP_API_HOST;
  get = (url?: string) => {
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    console.log(url, this.BASE_URL);

    if (this.BASE_URL === undefined)
      throw new Error('API Host is not defined.');
    if (!url) return fetch(this.BASE_URL, options);

    return fetch(`${this.BASE_URL}${url}`, options);
  };
}

export default HttpClient;
