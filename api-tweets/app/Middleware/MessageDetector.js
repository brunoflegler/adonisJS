"use strict";

class MessageDetector {
  async handle({ request }, next) {
    request.intercept = { message: "passei aqui" };

    await next();
  }
}

module.exports = MessageDetector;
