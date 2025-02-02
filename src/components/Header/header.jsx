import "./header.css";
import logo from './logo1.png';

export function Header() {
    return (
        <header>
            <img src={ logo } alt="logo" />
            <h1>My Little impostor's algorithm</h1>
        </header>
    );
}