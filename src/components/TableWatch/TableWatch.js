import React, { useEffect, useState } from 'react'
import FormGroup from '../FormGroup/FormGroup';
import Watch from '../Watch/Watch';
import WatchModel from '../../models/WatchModel';

function TableWatch(props) {

    const [form, setForm] = useState({ name: '', zone: ''});
    const [watches, setWatch] = useState([new WatchModel('UTC', 0)]);





const handleSubmit = (evt) => {
    evt.preventDefault();

    if (watches.findIndex((el) => el.name === form.name) !== -1) {
        setForm({ name: '', zone: '' })
        return null;
    }


    setWatch((prevWatch) => [...prevWatch, new WatchModel(form.name, parseInt(form.zone))])
    evt.target.reset();
}

    const handleChange = (name, value) => {
        return setForm((prevForm) => ({...prevForm, [name]: value}))
    }

    const handleRemove = (id) => {
        setWatch((prevWatch) => prevWatch.filter((item) => item.id !== id));
    }

  return (
    <div>
        <FormGroup handleSubmit={handleSubmit} handleChange={handleChange} value = {form} />
        {watches.length ? watches.map((watch) => <Watch key={watch.id} {...watch} handleRemove={handleRemove}/>) : null}
    </div>
  )
}

TableWatch.propTypes = {}

export default TableWatch