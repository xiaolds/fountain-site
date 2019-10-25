import React from 'react';
import fetch from 'isomorphic-unfetch';
import './main.scss';
// https://script.google.com/macros/s/AKfycbwxOYiZ_migcANi7P0rztSY8-ebKgcebsSShQBDng/exec
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
        const params = { name, email, mobile, content };
        console.log(name, email, mobile, content);

        if (this.check()) {
            this.setState({ btnTxt: 'Loading...' });
            // fetch('https://fast.fountain-site.top/sendemail', {
            fetch(
                'https://script.google.com/macros/s/AKfycbwxOYiZ_migcANi7P0rztSY8-ebKgcebsSShQBDng/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: Object.keys(params)
                        .map(key => {
                            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
                        })
                        .join('&')
                }
            )
                .then(r => r.text())
                .then(data => {
                    const resultData = JSON.parse(data);
                    if (resultData.result === 'success') {
                        this.setState({ btnTxt: 'Send Email Successfully!' });
                    } else {
                        this.setState({ btnTxt: 'Slow network, try again later~' });
                    }
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
