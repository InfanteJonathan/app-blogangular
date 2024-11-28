import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../../../interfaces/post.interface';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-mainlist',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mainlist.component.html',
  styleUrl: './mainlist.component.css'
})
export class MainComponent implements OnInit {

  postList: PostInterface[] =[];
  post?: PostInterface;
  token: string | null = null;
  private authStatusSub: Subscription; 

  constructor(private postService: PostService,
     private router : Router,
    private service: AuthService){

    this.authStatusSub = this.service.getAuthStatusListener().subscribe(isAuthenticated =>{
      if(isAuthenticated){
        this.token = localStorage.getItem('token') || '';
      }else{
        this.token = null;
      }
    })
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe({
      next: (result) => {
        this.postList = result.value;
        this.postList.forEach(p => {
          if(p.fechaRegistro){
            p.fechaRegistro = new Date(p.fechaRegistro);
          }
        });
      },
      error: (err) => {
        console.error("Error mostrando las publicaciones",err);
      }
    })
  }

  deletePost(id: number): void{
    this.postService.deletePost(id).subscribe(() => {
      this.postList = this.postList.filter(p => p.idPosts != id);
    });
  }

  viewPost(id:number):void {
    if(id){
      console.log("ID: ",id);
      this.router.navigate(['/get',id]);
    }
  }

  navigateCreate(): void{
    this.router.navigate(['/create']);
  }

}