import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostServiceService} from '../../services/post-service.service';
import {Post} from '../../modules/post';


// @ts-ignore
@Component({
  selector: 'app-post-of-users',
  templateUrl: './post-of-users.component.html',
  styleUrls: ['./post-of-users.component.css']
})
export class PostOfUsersComponent implements OnInit {
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postServiceService: PostServiceService) {
    this.activatedRoute.params.subscribe(value => {
      this.postServiceService.getSinglePost(value.id).subscribe(data => {
        this.posts = data;
      });
    });

  }

  ngOnInit(): void {
  }

}
