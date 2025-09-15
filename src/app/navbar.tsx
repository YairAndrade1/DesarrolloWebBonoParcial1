'use client'
export default function navBar() {
    return (
        <nav>
            <div className="flex items-center h-20 bg-white text-gray-800">
                <div className="mx-4 p-6"><img src="Uniandes.png" alt="Logo" className="h-12" /></div>
                <div className="flex-grow text-center">
                    <a href="" className="mx-4 hover:border-b-2">UserName</a>
                    <a href="" className="mx-4 hover:border-b-2">Phone Number</a>
                    <a href="" className="mx-4 hover:border-b-2">Address</a>
                </div>
            </div>
        </nav>
    );
}