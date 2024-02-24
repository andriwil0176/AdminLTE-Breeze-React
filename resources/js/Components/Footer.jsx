import React, { useState } from 'react';
import { Link, usePage  } from '@inertiajs/react';

export default function Footer() {
  const today = new Date;
  const year  = today.getFullYear();
  const [currentYear, setCurrentYear ] = useState(year);
  const { appName } = usePage().props;
  // const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
  // render() {
    return (
      <>
        <footer className="main-footer">
            <strong>Copyright &copy; {currentYear} 
            &nbsp;
            <Link href={route('dashboard')} >{appName}</Link>.
             </strong>
            &nbsp;
            All rights reserved.
            <div className="float-right d-non'e d-sm-inline-block">
              <b>Version</b> 3.2.0
            </div>
          </footer>
      
      </>
    )
  // }
}
