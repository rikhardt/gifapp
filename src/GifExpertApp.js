import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['The Beatles']);

    return(
        <>        
            <h1 className='titulo animate__animated animate__tada'>GIF APP</h1>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {    
                    categories.map(category => (
                       <GifGrid 
                        key={category}    
                        category={category}
                       />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
