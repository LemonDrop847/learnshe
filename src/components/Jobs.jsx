import useFetch from "./useFetch";
import JobList from "./Joblist";
const Jobs = () => {
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/profile');
    return (  
        <div className="jobs">
            <div className="special">
                <h2 style={{
                    textAlign: 'center',
                    fontSize:"60px"
                }}>Jobs</h2>
            </div>
            <div className="blogs">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            { blogs && <JobList blogs={blogs}/> }
            </div>
        </div>
    );
}
 
export default Jobs;