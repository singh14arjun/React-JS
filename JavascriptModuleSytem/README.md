# Javascript Module System
Javascript Module System
  - Module refers to a portion of code.
  - Modular refers to part-by-part. 
  - It allows to use only the required code for application.
  - It makes the application light weight and faster. 
  - Technically every Javascript file is considered as a module. 

						home.js	=> home module
						index.js   => index module

  - A module in Javascript comprises of 

			a) Variables
			b) Functions
			c) Classes 

  - Module members are not accessible outside the module scope.
  - You have to mark them as “export” in order to import and use in any location.

			export var title = “Welcome”;
			export function name() { }
			export class Name { }

  - Importing a member from module depends on module system.
  - Javascript have various module systems like
			a) Common JS
			b) ESModule
			c) UMD (Universal Module Distribution)
			d) AMD (Asynchronous Module Distribution)
  - Javascript inside browser uses “ESModule”. 
			
			// ESModule, UMD, AMD
			import { varName, funName, className } from “module.js”;
	
			// Common JS
			const refName = require(“module.js”);
			refName.varName
			refName.funName

  	- You have to export a member while declaring. 
	- If you want to export after declaration, then it must a default export. 

			var title = “Welcome”;
			export default title;

	- Every module can have only one default export. 
	- You can import default export outside the import block. 
	
			  import { title }  from  “home.js”;         // invalid if title is default 
			  import  title  from “home.js”;             //  valid for default members

	- You can import default members with others, but make sure that default is
	   the first import. 
	
			  import  { others } , title  from “home.js”;     // invalid 
			  import  title, { others } from “home.js”;       // valid 

	- If you want to import all members from a module then you have to use
	  aliasing method. 

				import   * as  aliasName   from “home.js”;
		
				aliasName.varName;
				aliasName.funName;
				aliasName.className; 

	- You can import members from multiple modules. 
	- If different modules have same name members then it leads to ambiguity. 
	- You can handle ambiguity issues by aliasing. 

				import  {  title as  homeTitle } from “home.js”;
				import  {  title as  loginTitle } from “login.js”;
Ex:
	home.js

export function title(){
    return "Home Page";
}

	login.js

export function title(){
    return "Login Page";
}

	home.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="module">
         import { title as homeTitle } from "./home.js";
         import { title as loginTitle } from "./login.js";

         document.querySelector("h1").textContent = loginTitle();
    </script>
</head>
<body>
    <h1></h1>
    
</body>
</html>
