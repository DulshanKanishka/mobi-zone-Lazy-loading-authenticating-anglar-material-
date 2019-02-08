import { Component, OnInit, ViewChild } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-adding-stock',
  templateUrl: './adding-stock.component.html',
  styleUrls: ['./adding-stock.component.css']
})
export class AddingStockComponent implements OnInit {


  posts: any[];

  constructor(private service: ShopsService) {
  }



  form = new FormGroup({
    sid: new FormControl(),
    sname: new FormControl(),
    place: new FormControl()
  });
  get sid() {
    return this.form.get('sid');
  }
  get sname() {
    return this.form.get('sname');
  }
  get place() {
    return this.form.get('place');
  }


  ngOnInit() {
    this.view();
  }


  view() {
    this.service.getAll()
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement, inpuut: HTMLInputElement, inpuuut: HTMLInputElement) {
    let post = { sid: input.value, sname: inpuut.value, place: inpuuut.value };
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;

          alert('Added');
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id)
      .subscribe(
        () => {
          alert('Deleted');
        });
  }

}
