const Home = () => {
    return ( 
        <>
        <div className="buddhi" >
            <img src="https://i.postimg.cc/7hZrwc7q/pexels-korhan-erdol-2344620.jpg" alt=""  id="buddhi"/>
            <h1 className="special">Let’s Learn Ladies!</h1>
            <p style={{
                textAlign: "left",
                padding: "20px", 
                fontSize: "20px",   
            }}>Flexible, self-paced learning that fits your schedule to improve your skills in your own field of interest.
            <ul style={{
                padding: "20px",
            }}>
                <li>Easy availability of courses according to interests</li>
                <li>Learn at your own pace from expert instructors</li>
                <li>Show your skills to the world</li>
            </ul>
            </p>
            <button className="hbutton" style={{
                color: 'white',
                backgroundColor:"#ca6d6dc8",
                float: "left",
                marginLeft: "50px"
            }}>Learn Now</button>
        </div>
        <div className="buddhi" >
            <img src="https://i.postimg.cc/VvpkHMZ9/pexels-teona-swift-6850651.jpg" alt=""  id="buddhi1"/>
            <h1 className="special">From Learning to Earning</h1>
            <p style={{
                textAlign: "left",
                padding: "20px",
                fontSize: "20px",
            }}>LearnSHE not only provides learning materials, in addition to it, this platform builds an easy medium for all skillful women to earn using the amazing skills they have.
            <ul>
                <li>Sell your works easily</li>
                <li>Get hired by top recruiters</li>
                <li>A great opportunity for all women to showcase your potential</li>
            </ul>
            </p>
            <button className="hbutton" style={{
                color: "white",
                backgroundColor:"#ca6d6dc8",
                float: "left",
                marginLeft: "50px"
            }}>Apply Now</button>
        </div>
        </>
    );
}
 
export default Home;