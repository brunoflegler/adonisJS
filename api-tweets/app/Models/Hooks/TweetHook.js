"use strict";

const TweetHook = (exports = module.exports = {});

TweetHook.validateFields = async tweet => {
  if (!tweet.content) {
    throw new Error("Content is required");
  }
};
