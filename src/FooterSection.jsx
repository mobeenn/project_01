import './App.css'
const FooterSection = () => {
    const myStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        textWrap: "wrap",
        marginTop: "30px"
    }
    return (
        <>
        <footer>
            <div style={myStyle}>
                <div className="footer-heading" style={{ maxWidth: "25%" }}>
                    <h1>Funiro.</h1><br />
                    <p>400 University Drive Suite 200 Coral Gables,
                        <br /> FL 33134 USA</p>
                </div>
                <div className="footer-links" style={{ maxWidth: "25%" }}>
                    <p>Links</p><br /><br />
                    <ul style={{ listStyle: "none" }}>
                        <li>Home</li><br /><br />
                        <li>About</li><br /><br />
                        <li>Shop</li><br /><br />
                        <li>Contact</li><br /><br />
                    </ul>
                </div>
                <div className="footer-links" style={{ maxWidth: "25%" }}>
                    <p>Help</p><br /><br />
                    <ul style={{ listStyle: "none" }}>
                        <li>Payment Options</li><br /><br />
                        <li>Returns</li><br /><br />
                        <li>Privacy Policies</li><br /><br />
                    </ul>
                </div>
                <div className="footer-links" style={{ maxWidth: "25%" }}>
                    <p>Newsletter</p><br /><br />
                    <input type="email" name="email" id="e-mail" /> <button>SUBSCRIBE</button>
                </div>
            </div>
        </footer >
        </>
        );
};
export default FooterSection;