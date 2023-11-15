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
        <div className='filter_div'>
             {/* color filter box */}
            <div className="check_box_div">
                <h4>Color</h4>
                <div className="check_box">
                <input type="checkbox" name="color"  onChange={handleFilterChange} value={'Red'} /> <label htmlFor="">Red</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="color" onChange={handleFilterChange}  value={"Blue"} /> <label htmlFor="">Blue</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="color" onChange={handleFilterChange} value={'Green'} /> <label htmlFor="">Green</label>
                </div>
            </div>
              {/* gender filter box */}
              <div className="check_box_div">
                <h4>Gender</h4>
                <div className="check_box">
                <input type="checkbox" name="gender" onChange={handleFilterChange} value={'Men'} /> <label htmlFor="">Men</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="gender" onChange={handleFilterChange} value={"Women"} /> <label htmlFor="">Women</label>
                </div>
            </div>
            {/* price filter box */}
            <div className="check_box_div">
                <h4>Price</h4>
                <div className="check_box">
                <input type="checkbox" name="price" onChange={handleFilterChange} value={250} /> <label htmlFor="">Rs 0- Rs 250</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="price" onChange={handleFilterChange} value={251} /> <label htmlFor="">Rs 251- Rs 450</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="price" onChange={handleFilterChange} value={450} /> <label htmlFor=""> Rs 450</label>
                </div>
            </div>
             {/* type filter div */}
             <div className="check_box_div">
                <h4>Type</h4>
                <div className="check_box">
                <input type="checkbox" name="type" onChange={handleFilterChange} value={'Polo'} /> <label htmlFor="">Polo</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="type" onChange={handleFilterChange} value={"Hoodie"} /> <label htmlFor="">Hoodie</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="type" onChange={handleFilterChange} value={'Basic'} /> <label htmlFor="">Basic</label>
                </div>
            </div>
         </div>
  )
}

export default Filter