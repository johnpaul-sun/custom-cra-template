import Home from "./Home/Test";

export { Home };

/** [+] NOTE [+]
 * When you're trying to test your Routes, keep this in mind.
 * Every important library should have "../" added to it.
 * You should go one level up because you're lifting up this component by one folder.
 **/

/** [+] Quick Guide on how this thing works. [+]
 * Import the folder of your Test Routes here, then add it in the export section.
 *
 * Testing your Routes can save you time when debugging a component or something in the long run.
 * The steps and explanation for how this thing works are essentially the same as for how the index thing works.
 * We just added the test folder so that when we import all of the test routes, the test file will be used.
 *
 * When importing a test component, it is recommended that import all as Test
 * This will remind you that you're using the test file,
 * and that you should switch to the default file once all of the tests have been completed.
 * Your imported line should look like this in ./src folder.
 *
 * import * as Test from "./Routes/test";
 *
 **/
