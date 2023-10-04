import React, { useState } from 'react'

function FormGroup({ handleSubmit, handleChange, value }) {

    const onInput = ({ target }) => {
        let { name, value } = target;
        handleChange(name, value);
    }

    const onDate = ({ target }) => {
        let { name, value } = target;
        handleChange(name, value);
    }

    const onSubmit = (evt) => {
        return handleSubmit(evt);
    }




    return (
        <form onSubmit={onSubmit} className="form-group" data-element="productForm">
            <input onChange={onDate} className="form-group__control" name="name" type="text" value={value.name} required placeholder="Name" />
            <input onChange={onInput} className="form-group__control" name="zone" value={value.zone} type="text" required placeholder="Zone" />
            <button name="save" className="button button_primary">
                Добавить
            </button>
        </form>
    )
}

FormGroup.propTypes = {}

export default FormGroup;