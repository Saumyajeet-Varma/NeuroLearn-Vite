import { Link } from 'react-router-dom';

function PageNotFound() {

    return (
        <div className='ubuntu flex flex-col min-h-screen gap-4 justify-center items-center bg-[#24384A]'>
            <h1 className='text-8xl text-[#1ABC9C] font-bold'>ERROR - 404</h1>
            <p className='text-4xl text-[#1ABC9C] font-semibold'>PAGE NOT FOUND</p>
            <Link to="/" className='text-white font-semibold text-lg mt-5'>Go Back Home</Link>
        </div>
    );
}

export default PageNotFound