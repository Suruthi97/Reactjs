import Popular from '../Dashboard/Popular';
import Trend from '../Dashboard/Trend';
import Shows from '../Dashboard/Shows';
import Blockbuster from '../Dashboard/Blockbuster';
import Originals from '../Dashboard/Originals';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function HomeScreen() {
    return (
        <div><Header />
            <Popular />
            <Trend />
            <Shows />
            <Blockbuster />
            <Originals />
            <Footer />
        </div>
    );
}
export default HomeScreen;