import { useState } from "react";
import { useDispatch } from "react-redux";
import "./CardForm.css";
import { add } from "/src/redux/citiesSlice";

function CardForm (){

    const dispatch = useDispatch();
    const [formData, setFormData] = useState ({

        title: "",
        children: "",
        imgUrl: "",
        isVisited: false,

    })


    const handleInputChange = (e) => {
        const {name,value,type,checked} = e.target;
        const inputValue  = type == "checkbox" ? checked : value; // vai a prendere il prop "checked" se l'input type è checkbox, altrimenti "value"

        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const city = {
            id : Math.random(),
            isVisited : formData.isVisited,
            title : formData.title,
            imgUrl : formData.imgUrl,
            children : formData.children,
          };

        setFormData({ //ridefiniamo qui la funzione in modo tale da ripulire lo stato del form

            title: "",
            children: "",
            imgUrl: "",
            isVisited: false,
    
        });

          dispatch(add(city));
    };

    return (

        <form
            onSubmit = {handleSubmit}
            className="card-form">
            <div className = "form-group">
                <label>Nome città</label>
                <input
                    type="text"
                    name = "title"
                    value = {formData.title}
                    onChange ={handleInputChange}/>
            </div>

            <div className = "form-group">
                <label>Descrizione</label>
                <textarea
                    name = "children"
                    value = {formData.children}
                    onChange ={handleInputChange}></textarea>
            </div>

            <div className = "form-group">
                <label>Immagine</label>
                <input
                    type="text"
                    name = "imgUrl"
                    value = {formData.imgUrl} onChange ={handleInputChange} />
            </div>

            <div className = "form-group">
                <label >Visitata?</label>
                <input
                    type="checkbox"
                    name = "isVisited"
                    checked = {formData.isVisited} onChange ={handleInputChange}/>
            </div>

            <button className = "form-button" type="submit" >aggiungi carta</button>
        </form>

    )


}

export default CardForm;