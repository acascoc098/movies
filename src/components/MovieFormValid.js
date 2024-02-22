import { postMovie } from "../api/MovieApi";
import { useState } from "react";

const MovieFormValid = ({onSaveMovie}) => {
    const [inputValue, setInputValue] = useState({
        title: "",
        description: "",
        year: 0,
        cover: "",
        rating: 0
    });
    const [errors, setErrors] = useState({
        title: {error: false, message: ""},
        rating: {error: false, message: ""}
    });

    const resetForm = () => {
        setInputValue({
            title: "",
            description: "",
            year: 0,
            cover: "",
            rating: 0
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await postMovie(inputValue);
        if (response.status === 200) {
            onSaveMovie(response.data);
            resetForm();
        } else {
            console.log("ERROR: No se ha podido guardar el libro")
        }


    }

    const handleChange = (event) => {
        let {name, value} = event.target;
        console.log(name, value);
        switch (name) {
            case "title":
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        title: {error: true, message: "El título del libro es obligatorio."}
                    })
                } else {
                    setErrors({
                        ...errors,
                        title: {error: false, message: ""}
                    })
                }
                break;
            case "rating":
                value = parseInt(value);
                if (value > 5 || value < 0) {
                    setErrors({
                        ...errors,
                        rating: {error: true, message: "La valoración debe estar entre 0 y 5 estrellas"}
                    })
                }else{
                    setErrors({
                        ...errors,
                        rating: {error: false, message: ""}
                    })
                }
                break;
            default:
                break;
        }

        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    return(
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                <span>Título</span>
                <input  type="text"
                        name="title"
                        value={inputValue.title}
                        onChange={handleChange}
                />
                {
                errors.title.error ? 
                    <div className="error">{errors.title.message}</div>
                    : null
                }
            </div>
            <div className="form-group">
                <span>Descripción</span>
                <input  type="text"
                        name="description"
                        value={inputValue.description}
                        onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <span>Año</span>
                <input  type="number"
                        name="year"
                        value={inputValue.year}
                        onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <span>Portada</span>
                <input  type="text"
                        name="cover"
                        value={inputValue.cover}
                        onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <span>Valoración</span>
                <input  type="number"
                        name="rating"
                        value={inputValue.rating}
                        onChange={handleChange}
                />
                {
                errors.rating.error ? 
                    <div className="error">{errors.rating.message}</div>
                    : null
                }
            </div>
            <div className="form-group">
                <button type="submit">Alta</button>
            </div>
        </form>
    );
}

export default MovieFormValid;