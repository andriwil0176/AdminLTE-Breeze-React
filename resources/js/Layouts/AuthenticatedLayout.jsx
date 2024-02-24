import { useEffect, useState, Helmet } from 'react';
import Sidebar from '@/Components/Sidebar';
import Topbar from '@/Components/Topbar';
import Footer from '@/Components/Footer';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    // if( reload == 1 ) window.location.reload(false);
    return (
        <>
        <div className="wrapper">
            <Topbar />
                
            <Sidebar />
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                {header && (

                    <div className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1 className="m-0">{header}</h1>
                        </div>
                        {/* <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard v1</li>
                        </ol> */}
                        </div>
                    </div>
                    </div>
                )}
    <section className="content">
      <div className="container-fluid">
                {/* <main> */}
                    {children}
                {/* </main> */}
        </div>
    </section>

            </div>

            <Footer  />
            
        </div>

    </>
    );
                
}
