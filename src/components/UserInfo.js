class UserInfo {
  constructor(user) {
    this._userName = user.name;
    this._userJob = user.job;
  }

  updateUserData(newData) {
    this._userName = newData.name;
    this._userJob = newData.job;
    this._setUserInfo();
  }
  getUserInfo() {
    return { name: this._userName, job: this._userJob };
  }
  _setUserInfo() {
    const userData = this.getUserInfo();
    const namePlace = document.querySelector(".info__name");
    const jobPlace = document.querySelector(".info__job");

    namePlace.textContent = userData.name;
    jobPlace.textContent = userData.job;
    console.log("user set");
  }
}
export { UserInfo };
