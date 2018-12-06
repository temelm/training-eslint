function Person (name) {
  this.name = name;
  this.goodnight = function () {
    return ['Goodnight', this.name].join(' ')
  }
}

var mrBean = new Person('Mr. Bean')

b.goodnightMrBean = mrBean.goodnight()
