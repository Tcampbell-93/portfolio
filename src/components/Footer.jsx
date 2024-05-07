import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <ul className="footer footer-tabs">
            <li className="footer-item">
                <a
                    href="https://github.com/Tcampbell-93"
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} /> Github
                </a>
                <a
                    href="https://www.linkedin.com/in/tyler-campbell-9301212b6/"
                    className="linkedIn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a
                    href="https://www.facebook.com/tyler.campbell.5264382"
                    className="facebook-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
            </li>
        </ul>
    );
}