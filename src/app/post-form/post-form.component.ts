import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef | undefined

  title: '' | undefined
  text: '' | undefined


  constructor() { }

  ngOnInit(): void {
  }
  // /Непонятно что означает ?/
  addPost(){
    if(this.title?.trim() && this.text?.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      // console.log('New Post', post)
      this.title = this.text = ''
    }
  }

  focusTitle(){
   this.inputRef?.nativeElement.focus()
  }
}
