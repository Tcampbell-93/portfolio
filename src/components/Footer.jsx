import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Footer component
export default function Footer() {
    return (
        <ul className="footer footer-tabs">
            <li className="footer-item">
                {/*link to my github page with an icon */}
                <a
                    href="https://github.com/Tcampbell-93"
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} /> Github
                </a>
                {/*link to my linkedin page with an icon */}
                <a
                    href="https://www.linkedin.com/in/tyler-campbell-9301212b6/"
                    className="linkedIn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                {/*link to my facebook page with an icon */}
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