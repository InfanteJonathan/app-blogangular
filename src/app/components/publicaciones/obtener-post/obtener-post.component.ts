import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-obtener-post',
  standalone: true,
  imports: [],
  templateUrl: './obtener-post.component.html',
  styleUrl: './obtener-post.component.css'
})
export class ObtenerPostComponent implements OnInit {

  post?: PostInterface
  constructor(private postService: PostService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getPost();
  }

  getPost():void{
    this.route.params.subscribe(params =>{
      const id = +params['id'];
      this.postService.get(id).subscribe(post => {
        this.post = post.value;
      });
    });
  }

}
