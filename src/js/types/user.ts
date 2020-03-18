export default class User {
  gender: String;
  name: {first: String, last: String, middle: String};
  location: {building: Number, street: String, city: String, state: String, zip: Number};
  username: String;
  email: String;
  password: String;
  salt: String;
  md5: String;
  sha1: String;
  sha256: String;
  registered: Number;
  dob: Number;
  phone: String;
  cell: String;
  picture: {large: String, medium: String, thumbnail: String};

  constructor(first: String, middle: String, last: String) {
    this.name = {first: first, last: last, middle: middle};
    this.gender = "";
    this.location = {building: -1, street: "", city: "", state: "", zip: -1};
    this.username = "";
    this.email = "";
    this.password = "";
    this.salt = "";
    this.md5 = ""
    this.sha1 = "";
    this.sha256 = "";
    this.registered = -1;
    this.dob = -1;
    this.phone = "";
    this.cell = "";
    this.picture = {large: "", medium: "", thumbnail: ""};
  }
}