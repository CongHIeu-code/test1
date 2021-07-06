/* eslint-disable @next/next/no-page-custom-font */

import { useRouter } from 'next/router'
import Link from 'next/link'

export default function AdminUser(){
    const router = useRouter();

    console.log("router",router.query.id);
    function handleOnClick(){
        router.push('/login');
    }

    return(
        <>
        <h1>Admin User Page {router.query.id}</h1>
        <Link href="/login">
            <button>
            Go to hompage
            </button>
        </Link>
        <button onClick={handleOnClick}>Go to hompage</button>
        </>
    )
}