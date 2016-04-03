UTILS = {
  getElementById: function (id) {
    return document.getElementById(id);
  },
  getValueById: function (id) {
    return this.getElementById(id).value;
  },
  setValueById: function (id, value) {
    this.getElementById(id).value = value;
  }
};
U = UTILS;
