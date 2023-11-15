import React, { useEffect } from 'react'
import "./Filter.css"

function Filter({filters,setFilters, products,setProducts,customData,searchInput}) {
    const handleFilterChange = (e) => {
        const { checked, name, value } = e.target;
        setFilters((prevFilters) => {
          if (checked) {
            return { ...prevFilters, [name]: [...prevFilters[name], value] };
          } else {
            const updatedValues = prevFilters[name].filter(val => val !== value);
            return { ...prevFilters, [name]: updatedValues };
          }
        });
      };
    const filteredProducts = customData.filter((product) => {
        const { gender, color, price, type } = filters;
        return (
            (!gender.length || gender.includes(product.gender)) &&
            (!color.length || color.includes(product.color)) &&
            (!price.length ||
                (price.includes("250") && product.price <= 250) ||
                (price.includes("251") && product.price >= 251 && product.price <= 450) ||
                (price.includes("450") && product.price >= 450)) &&
          (!type.length || type.includes(product.type))
        );
    });
    useEffect(()=>{  
      if(searchInput === ''){
        if(Object.keys(filters).every(key => filters[key] === "")){
            setProducts(customData)
        } else{
            setProducts(filteredProducts)      
        }
       }
    },[filters,setProducts,customData,searchInput,filteredProducts])

   
    
  return (
        <div className='filter_container'>
            <div className="checkbox_container">
                <h4>Color</h4>
                <div className="check_box">
                <input type="checkbox" name="color"  onChange={handleFilterChange} value={'Red'} /> <label>Red</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="color" onChange={handleFilterChange}  value={"Blue"} /> <label>Blue</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="color" onChange={handleFilterChange} value={'Green'} /> <label>Green</label>
                </div>
            </div>
              <div className="checkbox_container">
                <h4>Gender</h4>
                <div className="check_box">
                <input type="checkbox" name="gender" onChange={handleFilterChange} value={'Men'} /> <label>Men</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="gender" onChange={handleFilterChange} value={"Women"} /> <label>Women</label>
                </div>
            </div>
            <div className="checkbox_container">
                <h4>Price</h4>
                <div className="check_box">
                <input type="checkbox" name="price" onChange={handleFilterChange} value={250} /> <label>Rs 0- Rs 250</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="price" onChange={handleFilterChange} value={251} /> <label>Rs 251- Rs 450</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="price" onChange={handleFilterChange} value={450} /> <label> Rs 450</label>
                </div>
            </div>
             <div className="checkbox_container">
                <h4>Type</h4>
                <div className="check_box">
                <input type="checkbox" name="type" onChange={handleFilterChange} value={'Polo'} /> <label>Polo</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="type" onChange={handleFilterChange} value={"Hoodie"} /> <label>Hoodie</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="type" onChange={handleFilterChange} value={'Basic'} /> <label>Basic</label>
                </div>
            </div>
         </div>
  )
}

export default Filter