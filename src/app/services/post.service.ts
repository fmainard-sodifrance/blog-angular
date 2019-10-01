import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post1 = new Post(1,
    'Mon premier post',
    'Premier contenu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
  post2 = new Post(2,
    'Mon deuxième post',
    'Deuxième contenu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
  post3 = new Post(3,
    'Mon troisième post',
    'Troisième contenu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );

  posts = [this.post1, this.post2, this.post3];
  postSubject = new Subject<Post[]>();

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(id: number) {
    this.posts.splice(this.posts.findIndex(p => p.id === id), 1);
    this.emitPosts();
  }

  loveIt(id: number) {
    const post = this.posts.find(p => p.id === id);
    post.loveIts++;
    this.emitPosts();
 }

  dontLoveIt(id: number) {
    const post = this.posts.find(p => p.id === id);
    post.loveIts--;
    this.emitPosts();
  }

  getNextIndex() {
    return this.posts.length + 1;
  }

}
