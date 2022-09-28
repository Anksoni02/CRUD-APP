import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
  updateName() {
    // u can fetch this from any API too
    this.name.setValue('Nancy');
  }
}
