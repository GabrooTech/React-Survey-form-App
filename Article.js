import React from 'react';
import './Article.css';


export default function Article() {
    const [formData, setFormData] = React.useState(
    {firstName: "", email : "", age : "", company : "", comment : "", firstSupport : "", secondSupport : "", donation : "", rate: "",})

    


    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, 
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit (event) {
        event.preventDefault()
        //submitToApi (formData)
        console.log(formData)
    }

    return (
        <div className="Container">
            <form id="survey-form" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="name"  id="name-label">Name</label>
                    <input type="text" 
                    name="firstName" 
                    id="name" 
                    placeholder="Enter your name"
                     class="inputs" 
                     required 
                     onChange={handleChange}
                     value={formData.firstName}></input>
                </div>
                <div className="form-group">
                    <label for="email"  id="email-label">Email</label>
                    <input type="email" 
                    name="email" 
                    id="email"
                     placeholder="Enter your email" 
                     class="inputs" 
                     required
                     onChange={handleChange}
                     value={formData.email}></input>
                </div>
                <div className="form-group form-group-3">
                    <label for="age"  id="number-label">Age
                        <p className="optional">(optional)</p>
                    </label>
                    <input type="number" 
                    name="age" 
                    id="number" 
                    placeholder="Age" 
                    class="inputs" 
                    min="18" max="99"
                    onChange={handleChange}
                    value={formData.age}></input>
                </div>
                <div className="form-group">
                    <p className="form-p">Please select which organizacion do you want to donate</p>
                    <select name="company" 
                    id="dropdown" 
                    className="inputs select" 
                    required 
                    onChange={handleChange}
                    value={formData.company}>
                        <option>---Select an option---</option>
                        <option value="United Way Worldwide">United Way Worldwide</option>
                        <option value="Feeding America">Feeding America</option>
                        <option value="Salvation Army">Salvation Army</option>
                        <option value="Direct Relief">Direct Relief</option>
                        <option value="YMCA of the USA">YMCA of the USA</option>
                    </select>
                </div>
                <div className="form-group">
                    <p className="form-p">How often do you donate in Charity</p>
                    <label>
                        <input 
                        type="radio" 
                        name="rate"
                        value="often" 
                        className="input-radio" 
                        checked={formData.rate === "often"}
                        onChange={handleChange}
                        ></input>
                          Often
                    </label>
                    <label>
                        <input 
                        type="radio" 
                        name="rate" 
                        value="Always" 
                        className="input-radio" 
                        checked={formData.rate === "Always"}
                        onChange={handleChange}
                        ></input>
                          Always
                    </label>
                    <label>
                        <input 
                        type="radio" 
                        name="rate" 
                        value="That-my-first-one" 
                        className="input-radio" 
                        checked={formData.rate === "That-my-first-one"}
                        onChange={handleChange}
                        ></input>
                          That my first one
                    </label>
                </div>
                <div className="form-group form-group-2">
                    <label for="email"  id="name-label">How much would you like to donate</label>
                    <input type="number" 
                    name="donation" 
                    id="email" 
                    placeholder="Enter amount of Donation" className="inputs" 
                    min="5" max="1000000" 
                    required
                    onChange={handleChange}
                    value={formData.donation}></input>
                </div>
                <div className="form-group">
                    <p className="form-p">Please leave a massage for reciver</p>
                    <textarea name="comment" 
                    id="comments" 
                    className="input-textarea" 
                    placeholder="Enter your comment here... " 
                    required
                    onChange={handleChange}
                    value={formData.comment}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" 
                    id="submit" 
                    className="submit-button"
                    > Submit </button>
                </div>
                <div className="form-group">
                    <p className="form-p">Are you happy with our support</p>
                    <label>
                        <input type="checkbox" 
                        className="input-checkbox" 
                        name="firstSupport" 
                        value="Yes"
                        onChange={handleChange}
                        checked={formData.firstSupport}></input>
                        Yes
                        <input type="checkbox" 
                        className="input-checkbox" 
                        name="secondSupport" 
                        value="No"
                        onChange={handleChange}
                        checked={formData.secondSupport}></input>
                        No
                    </label>
                </div>
            </form>
        </div>
      );
}
