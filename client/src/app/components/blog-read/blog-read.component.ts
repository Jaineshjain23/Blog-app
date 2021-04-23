import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-read',
  templateUrl: './blog-read.component.html',
  styleUrls: ['./blog-read.component.css']
})
export class BlogReadComponent implements OnInit {

  currentBlog = null;

  constructor(private blogService: BlogService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.getBlog(this.route.snapshot.paramMap.get('id'))
  }

  getBlog(id): void {
    this.blogService.get(id)
      .subscribe(
        data => {
          this.currentBlog = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
