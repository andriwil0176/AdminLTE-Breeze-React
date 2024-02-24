import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'nav-link ' +
                (active
                    ? 'active tw-border-green-400 tw-text-gray-900 focus:tw-border-green-700 '
                    : ' ') +
                className
            }
        >
            {children}
        </Link>
    );
}
