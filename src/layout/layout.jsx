import Header from "../component/Header/Header";

function Layout({children}) {
    return ( 
        <div>
            <div className="flex items-center justify-center flex-col max-w-5xl">
                <Header />
                {children}
                <div>
                    footer
                </div>
            </div>
        </div>

     );
}

export default Layout;