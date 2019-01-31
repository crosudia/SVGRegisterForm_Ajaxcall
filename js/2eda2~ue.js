/* 
Define AJAX call that submits the form data to the server.
 Send POST request to URL: https://actum-form-ulcrunoxba.now.sh/api/submit, the
body has to be:
{ name, surname, date, email, gender, children }
 Show success/failure response notification
 The request from the server { success: bool, message: string }
 To invoke the failure response, `name` has to be `John`
It is not possible to submit the form when there are validation errors.

*/

class myPerson {
  constructor(name, surname, date, email, gender, children) {
    this._name = name;
    this._surname = surname;
    this._birthdate = birthdate;
    this._email = email;
    this._gender = gender;
    this._children = children;
  }
  get Person() { return "name" + " "+ "surname" " "+ "birhdate"+ " "+ "email"+" "+"gender"+" "+"children ";}
  set name(n) { this._name = n; }
  set surname(s) { this._surname = s; }
  set birthdate(b) { this._birthdate = b; }
  set email(e) { this._email = e; }
  set gender(g) { this._gender = g; }
  set (childrenc) { this._children = c; }
}
