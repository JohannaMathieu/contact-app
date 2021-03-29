import React from "react";
import "./Contact.css";

const name = "Hanna123";
const avatar =
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png";
let online = true;

function Contact() {
    return (
        <div className="Contact">
            <img src={avatar} className="avatar" alt="avatar" />
            <div>
                <h4 className="name"> {name} </h4>
                <div className="status">
                    <div className={online ? "status-online" : "status-offline"}></div>
                    <p className="status-text"> {online ? "Online" : "Offline"} </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;