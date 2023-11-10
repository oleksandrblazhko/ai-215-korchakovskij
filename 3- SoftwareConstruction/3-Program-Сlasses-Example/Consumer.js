class Consumer extends User {
  previous_tempreture_level;
  previous_annoyance_level;

  constructor({
    name,
    email,
    age,
    role,
    previous_annoyance_level,
    previous_tempreture_level,
  }) {
    super(name, email, age, role);
    this.previous_tempreture_level = previous_tempreture_level;
    this.previous_annoyance_level = previous_annoyance_level;
  }
}
