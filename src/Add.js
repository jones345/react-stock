
import React from 'react'

export default function Add() {



    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
            style={{
                backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                <div className="text-center">
                    <h2 className="mt-5 text-3xl font-bold text-gray-900">
                        Stock 
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">Add Stock to database</p>
                </div>

                <form className="mt-8 space-y-3" action="#" method="POST">
                   
                     <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">PRODUCT</label>
                        <select
                            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            >
                        <option>PRODUCT1</option>
                        <option>PRODUCT2</option>
                        <option>PRODUCT3</option>
                        <option>PRODUCT4</option>
                            </select>

                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">ITEM</label>
                        <input
                            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            type="" placeholder="item names"/>
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">PRICE</label>
                        <input
                            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            type="number" placeholder="item price"/>
                    </div>


                    <p className="text-sm text-gray-300">
                        <span></span>
                    </p>
                    <div>
                        <button type="submit" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>

)
}
