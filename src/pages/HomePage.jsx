import MovieSearch from "../component/movieSearch";
import Layout from "../layout/layout";


function HomePage() {
      

    return ( 
        <Layout>
            <div>
                <MovieSearch />
            </div>
        </Layout>
     );
}

export default HomePage;