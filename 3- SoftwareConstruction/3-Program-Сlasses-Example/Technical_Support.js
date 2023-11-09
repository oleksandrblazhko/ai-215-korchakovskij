class Technical_Support extends User {
  specialization;
  position;

  constructor({ name, email, age, role, specialization, position }) {
    super(name, email, age, role);
    this.specialization = specialization;
    this.position = position;
  }
}
