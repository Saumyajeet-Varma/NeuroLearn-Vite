import Header from "./Header"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main role="main" className="flex-grow">
                {children}
            </main>
        </div>
    )
}

export default Layout
