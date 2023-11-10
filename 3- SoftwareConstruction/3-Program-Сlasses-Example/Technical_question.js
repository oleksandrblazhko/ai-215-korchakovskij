class Technical_question {
  question;
  answer;
  is_answered;

  constructor({ question, answer, is_answered }) {
    this.question = question;
    this.answer = answer;
    this.is_answered = is_answered;
  }

  get question() {
    return this.question;
  }

  get answer() {
    return this.answer;
  }

  get is_answered() {
    return this.is_answered;
  }

  set question(new_question) {
    this.question = new_question;
  }

  set answer(new_answer) {
    this.answer = new_answer;
  }

  set is_answered(new_is_answered) {
    this.is_answered = new_is_answered;
  }
}
