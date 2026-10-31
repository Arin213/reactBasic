import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


    /**
     * Challenge: Use a ternary to determine which star image variable
     * should be used based on the `contact.isFavorite` property. Test 
     * your results by manually changing the isFavorite value in state.
     * 
     * `true` => starFilled
     * `false` => starEmpty
     */



    function toggleFavorite() {
        console.log("aria-pressed = ", contact.isFavorite); // Log before state update
        setContact(prevContact => {
            {/**
                * ...prevContact => This is the spread operator. It takes all the properties of the
                * previous state object and copies them into the new state object. This is important
                * because if we didn't do this, we would lose all the other properties of the contact
                * object when we update the isFavorite property.
                * 
                * firstName: "John",
                lastName: "Doe",
                phone: "+1 (212) 555-1212",
                email: "itsmyrealname@examp.com",
                isFavorite: true,
                * 
                */}
            return {
                
                ...prevContact,
            isFavorite: !prevContact.isFavorite
            }
})
    }

return (
    <main>
        <article className="card">
            <img
                src={avatar}
                className="avatar"
                alt="User profile picture of John Doe"
            />

            {
                /**
                 * Challenge:
                 * Update the following:
                 * - aria-pressed should reflect the same value as contact.isFavorite.
                 * - aria-label should switch to say "Remove from favorites" if
                 *   contact.isFavorite is `true`.
                 * - img alt should say "filled star icon" when it is filled.
                 */
            }
            <div className="info">
                <button
                    onClick={toggleFavorite}
                    aria-pressed={contact.isFavorite}
                    aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                    className="favorite-button"
                >
                    <img
                        src={contact.isFavorite ? starFilled : starEmpty}
                        alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                        className="favorite"
                    />
                </button>

                <h2 className="name">
                    {/* * Challenge: Fill in the values in the markup
                        * using the properties of our state object above
                        * (Ignore `isFavorite` for now) */}
                    {/* change hard coded to obj.prop */}
                    {/* John Doe */}

                    {contact.firstName} {contact.lastName}

                </h2>
                {/* +1 (212) 555-1212 hardcoded instead pass contact.phone */}
                <p className="contact">{contact.phone}</p>
                {/* instead of hardcoded itsmyrealname@example.com pass contact.email  */}
                <p className="contact">{contact.email}</p>
            </div>

        </article>
    </main>
)
}
