"use strict";
// TypeScript OOP Assignment – Class Diagram
// Part A - System: Simple Notes Management System
//1. Base Class – User
// 5. Aggregation – User and Notebook
class User {
    _id;
    _name;
    _email;
    _password;
    _phone;
    _age;
    _noteBooks = [];
    constructor(name, id, email, password, phone, age) {
        if (age < 18 || age > 60) {
            throw new Error("invalid age it should be between 18 and 60");
        }
        this._name = name;
        this._email = email;
        this._password = password;
        this._id = id;
        this._age = age;
        this._phone = phone;
    }
    displayInfo = () => {
        console.log(` data of user :  {id : ${this._id} ,
    name : ${this._name} ,
    email : ${this._email} ,
    password : ${this._password} ,
    phone : ${this._phone} ,
    age : ${this._age}
            }`);
    };
    addNoteBook = (noteBook) => {
        this._noteBooks.push(noteBook);
        console.log(`notebook added sucessfully`);
    };
    deleteNoteBook = (noteBookId) => {
        const id = this._noteBooks.findIndex(note => note._id === noteBookId);
        if (id == -1) {
            throw new Error("id of note book don't exist");
        }
        this._noteBooks.splice(id, 1);
        console.log("the note book deleted successfully");
    };
}
const user = new User("aser", 12, "gg@gmail.com", "12315", "01242321232", 30);
// user.displayInfo();
// ========================================================================================
// 2. Inheritance – Admin User 
class Admin extends User {
    constructor(name, id, email, password, phone, age) {
        super(name, id, email, password, phone, age);
    }
    displayInfo = () => {
        console.log(` data of admin :  {id : ${this._id} ,
    name : ${this._name} ,
    email : ${this._email} ,
    password : ${this._password} ,
    phone : ${this._phone} ,
    age : ${this._age}
            }`);
    };
    manageNotes = (noteBook, noteId) => {
        noteBook.removeNote(noteId);
    };
}
// console.log("========================================================================================");
const admin = new Admin("sds", 1, "gggasd@gmail.com", "12315213", "01242321232", 30);
// admin.displayInfo();
// ========================================================================================
// 3. Class - Note
// 6. Association – Note and User
class Note {
    _id;
    _title;
    _content;
    _userId;
    _author;
    constructor(_id, _title, _content, _userId, _author) {
        this._id = _id;
        this._title = _title;
        this._content = _content;
        this._userId = _userId;
        this._author = _author;
        this._id = _id;
        this._title = _title;
        this._content = _content;
        this._userId = _userId;
        this._author = _author;
    }
    preview = () => {
        const words = this._content.split(" ");
        if (words.length > 5) {
            return words.slice(0, 5).join(" ");
        }
        return this._content;
    };
}
// console.log("========================================================================================");
const note = new Note(2, "hello", "hello world hello world hello world", 12, user);
// console.log(`content : ${note.preview()}`);
// ========================================================================================
// 4. Composition – NoteBook and Notes
class NoteBook {
    _id;
    _title;
    _notes = [];
    constructor(_id, _title) {
        this._id = _id;
        this._title = _title;
    }
    addNote = (note) => {
        this._notes.push(note);
        console.log(`note with title ${note._title} added successfully`);
    };
    removeNote = (noteId) => {
        const id = this._notes.findIndex((note) => { return note._id == noteId; });
        if (id == -1) {
            throw new Error("id of note don't exist");
        }
        this._notes.splice(id, 1);
        console.log(`the id : ${noteId} of note is deleted successfully`);
    };
    getNotes = () => {
        if (this._notes.length == 0) {
            console.log("there is no notes yet");
        }
        return this._notes;
    };
}
// console.log("========================================================================================");
const dataOfBook = new NoteBook(1, "my book");
// dataOfBook.addNote(note);
// dataOfBook.removeNote(2);
// console.log(dataOfBook.getNotes());
// admin.manageNotes(dataOfBook ,2);
// ========================================================================================
// 7. Generics– Data Storage
// exist duplicated Storage from reserved
class Storag {
    _items = [];
    constructor() { }
    addItem = (item) => {
        this._items.push(item);
        console.log("item added successfully");
    };
    removeItem = (item) => {
        const index = this._items.indexOf(item);
        if (index == -1) {
            throw new Error("item not found");
        }
        this._items.splice(index, 1);
        console.log("item deleted deleted sucessfully");
    };
    getAllItems = () => {
        return this._items;
    };
}
const noteStorage = new Storag();
// noteStorage.addItem(note);
// console.log(noteStorage.getAllItems());
