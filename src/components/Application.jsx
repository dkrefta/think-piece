import React, { Component } from "react";
import { collectIdsAndDocs } from "../utilities";
import { firestore } from "../firebase";
import Authentication from './Authentication'
import Posts from "./Posts";

class Application extends Component {
  state = {
    posts: [],
    user: null,
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

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user}/>
        <Posts
          posts={posts}
        />
      </main>
    );
  }
}

export default Application;
