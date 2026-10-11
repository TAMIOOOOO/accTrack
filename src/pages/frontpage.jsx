import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import '/src/styles/frontpage.css'
import StartTest  from "../components/layout/StartTest/StartTest";
import Mainlayout from "../components/layout/Mainlayout";
function FrontPage(){
    return(
        <div class="frontpage">
            <div class = "Headerlayout">
                <Header />
            </div>

            <div class = "sidelayout">
                <Sidebar />
            </div>

            <div class="mainlayout">
                <Mainlayout />
            </div>
        </div>
    )
}

export default FrontPage;