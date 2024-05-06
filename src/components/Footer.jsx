import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <ul className="footer footer-tabs">
            <li className="footer-item">
                <Link
                    to="https://github.com/Tcampbell-93"
                    className="github-link"
                >
                    Github
                </Link>
                <Link
                    to="https://www.linkedin.com/in/tyler-campbell-9301212b6/"
                    className="linkedIn-link"
                >
                    LinkedIn
                </Link>
                <Link
                    to="https://www.facebook.com/tyler.campbell.5264382"
                    className="facebook-link"
                >
                    Facebook
                </Link>
            </li>
        </ul>
    )
}