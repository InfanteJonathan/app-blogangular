import { Component } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { PostInterface } from '../../../interfaces/post.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import {  Router, RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';


@Component({
	selector: 'app-postcreate',
	standalone: true,
	imports: [RouterModule,FormsModule,ReactiveFormsModule,EditorModule],
	templateUrl: './postcreate.component.html',
	styleUrls: ['./postcreate.component.css'],
})
export class PostcreateComponent {
	postForm: FormGroup;

	constructor(
		private postService: PostService,
		private fb: FormBuilder,
		private router: Router,

	) {
		this.postForm = this.fb.group({
			title: ['',Validators.required],
			content: ['', Validators.required]
		});
	}


	onSubmit(): void{
		if(this.postForm.valid){
			const newPost: PostInterface = this.postForm.value;
			this.postService.createPost(newPost).subscribe(() => {
				this.router.navigateByUrl('/');
			})
		}
	}
  
}
