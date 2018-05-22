import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})


export class SigninComponent {
    myForm: FormGroup;

    onSubmit() {
        console.log(this.myForm);
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)

        });
    }
}