import React, { Component } from "react";
import { collectIdsAndDocs } from "../utilities";
import { firestore } from "../firebase";

import Posts from "./Posts";

class Application extends Component {
  state = {
    posts: []
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("posts").onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({
        posts
      });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection("posts").add(post);

    const doc = await docRef.get();

    const newPost = collectIdsAndDocs(doc);

    this.setState({
      posts: [newPost, ...posts]
    });
  };

  handleRemove = async id => {
    const allPosts = this.state.posts;

    await firestore.doc(`posts/${id}`).delete();

    const posts = allPosts.filter(post => post.id !== id);
    this.setState({
      posts
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
      </main>
    );
  }
}

export default Application;
