import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  assignment = true;
  lecture =true;
  assignment_box = true;
  lecture_box = true;
  constructor() { }

  ngOnInit(): void {
  }

}
