import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });
    
    test('debe de mostraese correctamente', () => {

        expect(wrapper).toMatchSnapshot();
      
    });

    test('debe de cambiar la caja de texto', () => {
        
         const input = wrapper.find('input');
         const value = 'Hola Mundo';
         input.simulate('change', {target: {value}});   

        //  Se agregó un párrado a la vista para poder evaluar si cambio el valor de la caja

    });

    test('NO debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}} );

        expect(setCategories).not.toHaveBeenCalled();
        
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        // 1. Simular el inputChange
        // 2. Similar el submit
        // 3. setCategories se debe de haber llamado
        // 4. El valor del input de de estar ''
        
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: {value}});  

        wrapper.find('form').simulate('submit', {preventDefault(){}} );
        expect(setCategories).toHaveBeenCalled();
        // espera que se haya llamado una vez
        expect(setCategories).toHaveBeenCalledTimes(1);
        // Espera que se haya llamado como una función
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));


        const input = wrapper.find('input');
        const inputValue = input.prop('value');
        expect(inputValue).toBe('');
                

    });
    
    

})
