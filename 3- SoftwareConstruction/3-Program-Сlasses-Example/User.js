class User {
  name;
  email;
  age;
  role;

  constructor({ name, email, age, role }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.role = role;
  }

  get name() {
    return this.name;
  }

  get email() {
    return this.email;
  }

  get age() {
    return this.age;
  }

  get role() {
    return this.role;
  }

  set name(new_name) {
    this.name = new_name;
  }

  set email(new_email) {
    this.email = new_email;
  }

  set age(new_age) {
    this.age = new_age;
  }

  set role(new_role) {
    this.role = new_role;
  }
}
