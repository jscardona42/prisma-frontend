import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: any = [];

  post = {
    title: '',
    content: '',
    author: { name: '', email: '' }
  };
  ngOnInit() {
    this.postService.getPost()
      .subscribe(result => {
        var data = result.data;
        this.posts = data;
      }, (err) => {
        console.log(err.graphQLErrors)
      })
  }

}
