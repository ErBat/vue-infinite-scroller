export default interface userInterface {
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
}