<template>
  <div class="app">
    <button v-on:click="postTweet">ツイート</button>
  </div>
  <div>
    <p v-for="tweet in tweets" :key="tweet.id">
      {{ tweet.text }}
    </p>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
// firebase.js で db として export したものをimport
import { db } from "./firebase";

export default {
  data() {
    return {
      tweets: [
        // こんなん
        {
          id: "0GwoGZuhTNhqHQDBeiVW",
          text: "こんにちは、ツイートの本文です。",
        },
      ],
    };
  },
  methods: {
    postTweet() {
      const tweet = {
        text: "こんにちは、ツイートの本文です。",
      };
      addDoc(collection(db, "tweets"), tweet).then((ref) => {
        this.tweets.push({
          id: ref.id,
          ...tweet,
        });
      });
    },
    created() {
      getDocs(collection(db, "tweets")).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.tweets.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
