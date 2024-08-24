import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title: string = "";
  notes: string = "";
  notesList:any = [];
  editData:any;
  editIndex:number = 0;
  
  onSubmit() {
    let tempObject = {
      title:this.title,
      notes: this.notes
    }
    console.log('this.editData',this.editData)
    if(this.editData) {
      this.notesList[this.editIndex] = tempObject;
      this.editData = null;
      this.editIndex = 0
    } else {
      this.notesList.push(tempObject)
    }
    console.log(this.notesList)
    this.title = "";
    this.notes = "";
  }

  onDelete(index:number) {
    console.log(index)
    this.notesList.splice(index,1)
    // this.notesList.pop()
  }

  onEdit(data:any,index:number) {
    console.log(data)
    this.title = data.title
    this.notes = data.notes
    this.editData = data
    this.editIndex = index
  }
}
