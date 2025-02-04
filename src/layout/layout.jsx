function Layout({children}) {
    return ( 
        <div>

        <div className="flex items-center justify-center flex-col max-w-5xl">
            <div>
                Header
            </div>
            {children}
            <div>
                footer
            </div>
        </div>
        </div>

     );
}

export default Layout;