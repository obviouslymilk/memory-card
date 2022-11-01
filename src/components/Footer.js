import github from '../assets/github.png'
function Footer() {
    return (
        <div id="Footer">
            <p>©2014 Blizzard Entertainment, Inc. All rights reserved. Heroes of Warcraft is a trademark, and Hearthstone is a registered<br />trademark of Blizzard Entertainment, Inc. in the U.S. and/or other countries. I don't own any of this game assets.</p>
            <a href="https://github.com/obviouslymilk/memory-card" target={"_blank"} rel="noreferrer"><img id="github-link" src={github} alt="GitHub" /></a>
        </div>
    );
}

export default Footer;