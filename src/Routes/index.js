import Main from "./Home";

export { Main };

/** Quick Guide on how this thing works.
 * Import the folder of your Routes here, then add it in the export section.
 *  
[ 
  import Main from "./Home"; basically says that... 
  
  Import the folder "./Home" and name it Main or what ever you want to call your Route.
  It was like a key value pair or like a variable named after the import with the value from, from.
]
 * 
[ 
  export { Main }; basically says that... 

  From the Home folder, export the imported file named Main.
  When using the * method in importing, all of the Routes that are exported in this section are accessible from any page.
] 
 * This method can help us in reducing the length of our codes whenever we import them into any page.
 * 
 * [+] Importing to any page [+]
 * When you want to import your Routes into any page, use this importing method.
 *  
[ 
  import * as Routes from "./RoutesFolderPath/Routes"; basically says that... 

  Import ALL files and turn them into an object, then create a variable named Routes.
  So, whenever you want to call one of them, just type "<Routes".
  Then use dot notation to get the value you're looking for "<Routes.Main />".

  The from "./RoutesFolderPath/Routes" path should point to the Route path you want to use.
] 
 * You dont need to add /index.js, JavaScript is smart enough to know that you're importing the index.
 * This index contains all of your Routes, so make sure to add your route paths here before importing them to other pages.
 * 
**/
