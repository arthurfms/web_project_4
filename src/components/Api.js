class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.body = options.body;
  }

  getInitialCards() {
    fetch(this.baseUrl, this.body)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  getUser() {
    fetch(this.baseUrl, this.body)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
}
export { Api };
