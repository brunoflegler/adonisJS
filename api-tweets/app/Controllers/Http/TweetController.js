"use strict";

const Tweet = use("App/Models/Tweet");

class TweetController {
  async index() {
    const tweets = await Tweet.query()
      .with("user")
      .fetch();
    return tweets;
  }

  async store({ request, auth }) {
    const data = request.only(["content"]);
    const tweet = await Tweet.create({ user_id: auth.user.id, ...data });

    console.log(request.intercept.message);

    return tweet;
  }

  async likes({ params }) {
    let tweet = await Tweet.findOrFail(params.id);
    tweet.likes += 1;
    await tweet.save();
    return tweet;
  }

  async show({ params }) {
    const tweet = await Tweet.findOrFail(params.id);
    return tweet;
  }

  async destroy({ params, auth, response }) {
    const tweet = await Tweet.findOrFail(params.id);

    if (tweet.user_id !== auth.user.id) {
      return response.status(401);
    }

    tweet.delete();
  }
}

module.exports = TweetController;
