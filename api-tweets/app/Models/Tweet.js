"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Tweet extends Model {
  static boot() {
    super.boot();
    this.addHook("beforeSave", "TweetHook.validateFields");
  }

  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Tweet;
