// import React from "react"

// export default function App() {

//     function handler(formData) {
//         // event.preventDefault()

//         // // the use of formData to get the email and password using the get()
//         // // console.log("Submitted!")
//         // const formEl = event.currentTarget;
//         // const formData = new FormData(formEl);

//         // //now we can get the email as well as passwrod that typed in 
//         // const getEmail = formData.get("email"); // note: name should be email in label name
//         // console.log("This is typed Email: ", getEmail);
//         // //get password as well 

//         // const getPassword = formData.get("password");
//         // console.log("This is typed password: ", getPassword);

//         // //gather the info from the form
//         // // submit to the backed and reset 
//         // formEl.reset(); //leave the email and pass word field empty 

//         // WE CAN PASS THE formData directly as argument in handler and doing so 
//         // there is no need of preventDefualt() casue react 19 above will handle everything 
//         // for us on the form instead of onSubmit, we give action 

//         const getEmail = formData.get("email"); // name="email" from input field shold be same 
//         const getPassword = formData.get("password"); // name="password" 

//         // console.log("This is email: ", getEmail);
//         // console.log("This is password: ", getPassword);
//         const status = formData.get("employmentStatus");
//         console.log(status);

//         // in case of need of mutlitple checkbox use getAll
//         const getDietryRestriction = formData.getAll("dietaryRestrictions");
//         console.log(getDietryRestriction);
//         const getFavColor = formData.get("favColor");
//         console.log(getFavColor);



//     }

//     return (
//         <main>
//             <section>
//                 <h1>Sign up</h1>
//                 {/* jus a simple basics from  
//                         still need to add a lot of things just a begining phases of form her

//                         Basically we need post method as action in form if we dont want to get our password in the url 
//                         and also when passing sensitve da
//                         ta awlays use the POST rather than GET and if we dont especify the POST or any method then 
//                         by default the method would be GET
//                         */}

//                 {/* simply using "action" instead of "onSubmit" we can bypasss all those preventDefault, new formData...  */}
//                 <form action={handler} method="post">
//                     <label htmlFor="email">Email:</label>
//                     <input id="email" defaultValue="yoursExample@gmail.com" type="email" name="email" placeholder="john@example.com" />
//                     <br />
//                     <label htmlFor="password">Password:</label>
//                     <input id="password" type="password" name="password" />
//                     <br />

//                     {/* use of the text area */}
//                     <label htmlFor="description"> Description:</label>
//                     <textarea name="description" id="description" defaultValue="This is description">
//                     </textarea>

//                     {/* adding Radio*/}
//                     <fieldset>
//                         <legend>Employment Status</legend>
//                         <label>
//                             {/* value? is passed to save the value to the database */}
//                             <input type="radio" name="employmentStatus" value="unemployed" />
//                             Unemployed
//                         </label>
//                         <label>
//                             <input type="radio" name="employmentStatus" value="Part-time" />
//                             Part-time
//                         </label>
//                         <label>
//                             {/* defualt check will let the radio is on by default in the selected part  */}
//                             <input type="radio" name="employmentStatus" defaultChecked={true} value="Full-time" />
//                             Full-time
//                         </label>
//                     </fieldset>



//                     {/* adding checkbox */}
//                      <fieldset>
//                         <legend>Dietary restrictions:</legend>
//                         <label>
//                             {/* value? is passed to save the value to the database */}
//                             <input type="checkbox" name="dietaryRestrictions" value="kosher" />
//                             Kosher
//                         </label>
//                         <label>
//                             <input type="checkbox" name="dietaryRestrictions" value="vegan" />
//                             vegan
//                         </label>
//                         <label>
//                             {/* defualt check will let the radio is on by default in the selected part  */}
//                             <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
//                             Gluten-free
//                         </label>
//                     </fieldset>

//                     {/* select and options */}
//                     <label htmlFor="favColor">What is your favourite color ? </label>
//                     <select name="favColor" id="favColor" defaultValue="" required>
//                         <option value="">--choose your favourite color?--</option>
//                         <option value="red">Red</option>
//                         <option value="orange">Orange</option>
//                         <option value="yellow">Yellow</option>
//                         <option value="green">Green</option>
//                         <option value="blue">Blue</option>
//                         <option value="indigo">Indigo</option>
//                         <option value="voilet">Voilet</option>
//                     </select>

//                     <button type="submit">Submit</button>







//                 </form>
//             </section>
//         </main>
//     )
// }



import React from "react";

export default function App() {
    // need the form data collector 

    function handler(formData) {
        //let's get the input data from submited form 
        // since no need of prevent default and target value cause 
        // // react 19 will do its job in hunder the hood 
        
        // // email
        // const email = formData.get("email") //name="email" 
        // console.log(email);
        
        // // password
        // const password = formData.get("password") //name="password" 
        // console.log(password);
        
        
        // // Radio (Employement Status)
        // const status = formData.get("employementStatus") //name="employementStatus" 
        // console.log(status);
        
        // // checkbox (fruits)
        // const favFruit = formData.getAll("fruits") //name="fruits" 
        // console.log(favFruit);


        // // select and options (favColor)
        // const color = formData.get("favColor") //name="favColor" 
        // console.log(color);


        /*
            we can instead get the inputed value of submitted one 
            into the json type object by using the 
            Object.fromEnteries(formData)
            which will give us all the inputed value in object fomr 
            instead of consoling each value we can simpy do this 

        */


        /*
            got a problem here so the Object.fromEnteries wont put the multipe values
            like in getAll() for favourtie fruits so we will use the 
            spread operators and add the value to the existing key         
        */   
        const getObject = Object.fromEntries(formData);
        const getFruit = formData.getAll("fruits");
        //use spread to add the value 
        const getAllObject = {
            ...getObject,
            fruits:getFruit
        }
        console.log(getAllObject);


    }

    // need of the form layout 

    return (
        <main>
            <section>
                <form action={handler} method="post">
                    {/* email */}
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" defaultValue="yourexample@gmail.com" required />
                    <br />
                    {/* password */}
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <br />

                    {/* textarea */}
                    <label htmlFor="textArea">Description</label>
                    <textarea name="Description" id="textArea" defaultValue="This is description" />
                    

                    {/* radiobox need fieldset, legend and then label*/}
                    <fieldset>
                        <legend>Employment Status</legend>
                        <label>
                            <input type="radio"  value="unemployed" name="employmentStatus" defaultChecked />
                            unemployed
                        </label>
                        <label htmlFor="radio">
                            <input type="radio"  value="full-time" name="employmentStatus" />
                            Full-Time
                        </label>
                        <label htmlFor="radio">
                            <input type="radio"  value="part-time" name="employmentStatus" />
                            Part-Time
                        </label>
                    </fieldset>


                    {/* checkbox with fieldset and legend similar with radio  */}
                    <fieldset>
                        <legend>fruits</legend>
                        <label>
                            <input type="checkbox"  name="fruits" value="orange" />
                            Orange
                        </label>
                        <label>
                            <input type="checkbox"  name="fruits" value="mango" />
                            Mango
                        </label>
                        <label>
                            <input type="checkbox"  name="fruits" value="banana" />
                            Banana
                        </label>
                        <label >
                            <input type="checkbox"  name="fruits" value="apple" defaultChecked />
                            Apple
                        </label>
                    </fieldset>

                    {/* select and options we need selection field  and input values  */}
                    <label htmlFor="favColor">what is your favourite Color ? </label>
                    <select name="favColor" id="favColor" defaultValue="" required>
                        <option value="">--select your favourite fruits--</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="purple">Purple</option>
                        <option value="green">Green</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>



                    </select>

                    <button>submit</button>

                </form>
            </section>
        </main>
    )


}