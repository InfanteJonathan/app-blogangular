import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostInterface } from '../../../interfaces/post.interface';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule,EditorModule],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css',
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  postId!: number;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.postService.get(this.postId).subscribe((post) => {
        this.postForm.patchValue(post.value);
      });
    });
  }

  guardar(): void {
    if (this.postForm.valid) {
      const newPost: PostInterface = this.postForm.value;
      this.postService.updatePost(this.postId, newPost).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
