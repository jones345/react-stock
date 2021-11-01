import React, { useState, createContext, useEffect } from 'react';
import axios from "axios"
import Swal from 'sweetalert2'
import SweetAlert from "react-bootstrap-sweetalert";
import {Link} from "react-router-dom";

 function List () {
  const [StockData, SetStockData] = useState([0]);
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
 
  useEffect(() => {
 fetchData();
  }, []);


  const fetchData = () => {
    return axios.get("https://stock-backend-express.herokuapp.com/api/stock/all")
          .then((response) => {
              SetStockData(response.data)
            
          })
        }

        function deleteData(data){
           Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://stock-backend-express.herokuapp.com/api/stock/${data}`)
                .then(()=>{
                    Swal.fire(
                        'Deleted!',
                        'Stock has been deleted.',
                        'success'
                      )
                })
             
            }
          })
        
          }

          function addStock(){
            <SweetAlert
            success
            title="Woot!"
           
          >
            I did it!
          </SweetAlert> 
            
           }
        
    return (
        
            <div className="antialiased font-sans bg-gray-200"> 
                 <div className="container mx-auto px-4 sm:px-8">
                 <div class="py-8">
             <div>
                 <h2 class="text-2xl font-semibold leading-tight">Stock</h2>
             </div>
             <div class="m-3">
         <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
           <Link  to={'add'} class="mr-2">Add Stock</Link>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
          </svg>
       </button>
   </div>             <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                     <table class="min-w-full leading-normal">
                        <thead>
                             <tr>
                                <th
                                     class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                   products
                                 </th>
                                <th
                                     class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    items
                                 </th>
                                 <th
                                     class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                   Prices
                                 </th>
                                <th
                                    class="px-5 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                   Action
                                 </th>
                             </tr>
                        </thead>
                        <tbody>
                        
                    {StockData.map((stock)=>{
                        return(
                             <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                         <div class="ml-3">
                                             <p class="text-gray-900 whitespace-no-wrap">
                                                {stock.products}
                                             </p>
                                         </div>
                                    </div>
                                 </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{stock.items}</p>
                                 </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                     <p class="text-gray-900 whitespace-no-wrap">
                                       R:  {stock.price}
                                     </p>
                                </td>
                                <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                             d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                 </a>
                             </td>
                             <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                               <button onClick={() => deleteData(stock._id)} >
                                     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                     </svg>
                                 </button> 
                

                             </td>
                             </tr>

                                );
                                })}
                         
                        </tbody>
                    </table>
                  
                </div>
            </div>
         </div>
                 </div>

                 
           
        </div>
      );



}

 export default List;

