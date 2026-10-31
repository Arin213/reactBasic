import React from "react"

export default function App() {
    return (
        <main>
            <h1>Sign up</h1>
            {/* jus a simple basics from  
            still need to add a lot of things just a begining phases of form her*/}
            <form>
                <label htmlFor="email">Email:</label>
                <input  id="email" type="email" name="email" placeholder="john@example.com" />
                <br />
                <label htmlFor="password">Password:</label>
                <input  id="password" type="password" name="password" />
                <br />
                <button type="submit">Submit</button>

            </form>
        </main>
    )
}