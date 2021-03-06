/* Javascript
Prepare a function that is being invoked every time user submits a form. This function
validates any (solution is meant to be universal) form according to definition from server.
Validation errors are displayed right after losing focus from the form field.

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
  constructor(name, surname, birthdate, email, gender, children) {
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

class Person extends myPerson{
	constructor (person){
		super(person)
	}
	set person(myPerson){super.name=n; super.surname=s; super.birthdate=b; super.email=e; super.gender=g; super.children=c;}
}

//create a Person
var p= new Person ("Claudia","Rosu","01/01/1982","F",1);
var p= new Person ("Cezar Andrei","Rosu","06/17/2015","M",0);
var p= new Person ("Marian Tudor","Rosu","06/23/1976","M",1);
var p= new Person ("John","Teh Baptist","26/12/1926","M",0); // To invoke the failure response, `name` has to be `John`. 

// catch an error when name is "John"
var success={"M","F"};
var message="John";
message = document.getElementById("John");
message.innerHTML = "";
try{
	eval("alert('John')")
}
catch(err){
		message.innerHTML = "Error: It's a failure response " + err + ".";
}
finally {
		 document.getElementById("demo").value = "";
}


// Create the form
<FORM NAME="myform" ACTION="" METHOD="GET">
Register form: <BR>
<INPUT TYPE="text" NAME="inputbox" VALUE=""><P>
<INPUT TYPE="text" SURNAME="inputbox" VALUE=""><P>
<INPUT TYPE="date" BIRTHDATE="inputbox" VALUE=""><P>
<INPUT TYPE="radio" GENDER="inputbox" VALUE=""><P>
<INPUT TYPE="number" CHILDREN="inputbox" VALUE=""><P>
<INPUT TYPE="button" SUBMIT="button" Value="Click" onClick="testResults(this.form)">


</FORM>
// Method SUBMIT
let form = document.createElement('form');
form.action = 'https://actum-form-ulcrunoxba.now.sh/api/submit';
form.method = 'POST';

form.innerHTML = '<input name="q" value="test">';

// the form must be in the document to submit it
document.body.append(form);

form.submit();