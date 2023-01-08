import {useEffect} from 'react'
import useFetch from "./useFetch";
import BlogList from './BlogList';
const Learn = () => {
    const myskills='HTML,CSS';
    async function makePrediction() {
        // Send the request
        console.log('sending');
        const response = await fetch('http://LemonDrop47.pythonanywhere.com/predict', {
          method: 'POST',
          body: myskills,
        });
        // Get the response text
        const prediction = await response.text();
    
        // Print the prediction
        console.log(prediction);
      }
      useEffect(() => {
        makePrediction();
      }, [])
      
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/posts');
    return (
        <>
        <div className="special" >
            <h2 style={{
            fontSize: "60px",
            textAlign:"center"
        }}>Let's Learn</h2>
        </div>
        <div className="blogs">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
        </div>
        </>
     );
}
 
export default Learn;