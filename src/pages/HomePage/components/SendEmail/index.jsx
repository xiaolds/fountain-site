import React from 'react';
import fetch from 'isomorphic-unfetch';
import './main.scss';

class SendEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            content: '',
            submit: false,
            btnTxt: 'Tell Us Your Request'
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    check = () => {
        const { name, email } = this.state;

        return !!name && !!email;
    };

    handleSubmit = () => {
        this.setState({ submit: true });
        const { name, email, mobile, content } = this.state;
        console.log(name, email, mobile, content);

        if (this.check()) {
            this.setState({ btnTxt: 'Loading...' });
            fetch('https://fast.fountain-site.top/sendemail', {
            // fetch('http://localhost:3001/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, mobile, content })
            })
                .then(r => r.text())
                .then(data => {
                    this.setState({ btnTxt: JSON.parse(data).msg });
                });
        }
    };

    render() {
        const { name, email, mobile, content, submit, btnTxt } = this.state;
        return (
            <div className="form-wrapper">
                <div className="send-email-form-left">
                    <div className="left">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name*"
                            className="form-input full-width"
                            value={name}
                            onChange={this.handleChange}
                        />
                        {submit && !name && <p className="err-info">Name is required</p>}
                    </div>
                    <div className="right">
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email*"
                            className="form-input full-width"
                            value={email}
                            onChange={this.handleChange}
                        />
                        {submit && !email && <p className="err-info">Email is required</p>}
                    </div>
                </div>
                <input
                    type="text"
                    name="mobile"
                    placeholder="Your Mobile"
                    className="send-email-form-right form-input"
                    value={mobile}
                    onChange={this.handleChange}
                />
                <textarea
                    cols="40"
                    rows="10"
                    value={content}
                    placeholder="Your Requirements..."
                    className="form-textarea"
                    onChange={this.handleChange}
                    name="content"
                />
                <div className="form-submit">
                    <button onClick={this.handleSubmit} className="form-submit-btn">
                        {btnTxt || 'Loading...'}
                    </button>
                </div>
            </div>
        );
    }
}
export default SendEmail;
