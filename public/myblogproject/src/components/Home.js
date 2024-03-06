import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
    const {data} = UseFetch('http://localhost:4000/blogs');
    return (
        <div className="home">
            {data &&<BlogList blogs={data} title="ALL BLOGS"/>}

        </div>
    );
}

export default Home;