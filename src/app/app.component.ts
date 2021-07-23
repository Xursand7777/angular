import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {title:'Хочу выучить Ангулар компоненты', text:'Компоненты', id: 1},
    {title:'Следующий блок компоненты', text:'Компоненты', id: 2}
  ]
  updatePosts(post: Post){
    this.posts.unshift(post)
    // console.log('Post', post)
  }
}
