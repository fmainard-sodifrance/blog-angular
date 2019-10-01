import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  loveIt() {
    this.loveIts++;
    this.postService.loveIt(this.id);
  }

  dontLoveIt() {
    this.loveIts--;
    this.postService.dontLoveIt(this.id);
  }

  deletePost() {
    this.postService.deletePost(this.id);
  }

}
