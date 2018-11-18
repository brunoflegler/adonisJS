"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterTweetSchema extends Schema {
  up() {
    this.alter("tweets", table => {
      table.integer("likes").defaultTo(0);
    });
  }

  down() {
    this.drop("alter_tweets");
  }
}

module.exports = AlterTweetSchema;
