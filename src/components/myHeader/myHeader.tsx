import { Fragment } from 'react'
import {  MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'


function MyHeader(props) {
    return (
        <>
            <div className="bg-white">
                {/* Mobile menu */}


                <header className="relative bg-white">

                    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="flex h-16 items-center">


                                {/* Logo */}
                                <div className="ml-4 flex lg:ml-0">
                                    <a href="#">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            alt=""
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            className="h-8 w-auto"
                                        />
                                    </a>

                                    <div className="hidden  ml-4 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <a href="allcategories" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Categories
                                        </a>

                                        <span aria-hidden="true" className="h-6 w-px bg-gray-200" />

                                        <a href="allproducts" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Products
                                        </a>
                                    </div>
                                </div>



                                <div className="ml-auto flex items-center">

                                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Sign in
                                        </a>
                                        <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Create account
                                        </a>
                                    </div>

                                    <div className="hidden lg:ml-8 lg:flex">
                                        <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                            <img
                                                alt=""
                                                src="https://tailwindui.com/img/flags/flag-canada.svg"
                                                className="block h-auto w-5 flex-shrink-0"
                                            />
                                            <span className="ml-3 block text-sm font-medium">CAD</span>
                                            <span className="sr-only">, change currency</span>
                                        </a>
                                    </div>

                                    {/* Search */}
                                    <div className="flex lg:ml-6">
                                        <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Search</span>
                                            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                                        </a>
                                    </div>

                                    {/* Cart */}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <a href="#" className="group -m-2 flex items-center p-2">
                                            <ShoppingBagIcon
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            />
                                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>


        </>
    );
}

export default MyHeader;