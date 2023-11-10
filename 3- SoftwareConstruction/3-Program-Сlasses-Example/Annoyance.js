class Annoyance {
  check_time;
  annoyance_level;

  constructor({ check_time, annoyance_level }) {
    this.check_time = check_time;
    this.annoyance_level = annoyance_level;
  }

  get check_time() {
    return this.check_time;
  }

  get annoyance_level() {
    return this.annoyance_level;
  }

  set check_time(new_check_time) {
    this.check_time = new_check_time;
  }

  set annoyance_level(new_annoyance_level) {
    this.annoyance_level = new_annoyance_level;
  }
}
