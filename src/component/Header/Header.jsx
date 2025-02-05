'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Login from '../Login/Login';

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleLoginModal = () => setOpen( p => !p);

  return (
    <header className="bg-gray-900">
        <div className='block max-w-7xl mx-auto'>
            <div className="py-6">
                <button
                    onClick={handleLoginModal}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white bg-orange-600  hover:bg-orange-500"
                >
                    Log in
                </button>
            </div>

        </div>
            <Login open={open} setOpen={setOpen} />
    </header>
  )
}
