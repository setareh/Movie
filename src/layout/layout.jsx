import Header from "../component/Header/Header";

function Layout({children}) {
    return ( 
    <>
        <Header />
        <div className="max-w-7xl block mx-auto">
            <div className="flex flex-col">
                {children}
                {/* <div>
                    footer
                </div> */}
            </div>
        </div>

    </>

     );
}

export default Layout;