class Tempreture {
  check_time;
  actual_tempreture;
  feeling_tempreture;
  humidity;
  wind_speed;

  constructor({
    check_time,
    actual_tempreture,
    feeling_tempreture,
    humidity,
    wind_speed,
  }) {
    this.check_time = check_time;
    this.actual_tempreture = actual_tempreture;
    this.feeling_tempreture = feeling_tempreture;
    this.humidity = humidity;
    this.wind_speed = wind_speed;
  }

  get check_time() {
    return this.check_time;
  }

  get actual_tempreture() {
    return this.actual_tempreture;
  }

  get feeling_tempreture() {
    return this.feeling_tempreture;
  }

  get humidity() {
    return this.humidity;
  }

  get wind_speed() {
    return this.wind_speed;
  }

  set check_time(new_check_time) {
    this.check_time = new_check_time;
  }

  set actual_tempreture(new_actual_tempreture) {
    this.actual_tempreture = new_actual_tempreture;
  }

  set feeling_tempreture(new_feeling_tempreture) {
    this.feeling_tempreture = new_feeling_tempreture;
  }

  set humidity(new_humidity) {
    this.humidity = new_humidity;
  }

  set wind_speed(new_wind_speed) {
    this.wind_speed = new_wind_speed;
  }
}
