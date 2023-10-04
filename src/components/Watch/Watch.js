import iconDelete from '../../assets/icons/handleDelete.svg'
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import './Watch.css'
 
function Watch({ handleRemove, ...watch }) {
    const { time, name, id } = watch;
    const [zone, setZone] = useState(moment().utcOffset(0));
    let timeout;
    
    
        const starWatch = () => {
            setZone(moment().utcOffset(time));
        }

    useEffect(starWatch, []);



    useEffect(() => {
        timeout = window.setTimeout(starWatch, 1000);
        return () => {
            window.clearTimeout(timeout);
        }
    }, [zone])


    const second = (zone) => `rotate(${zone.second() / 60}turn)`
    const minutes = (zone) => `rotate(${zone.minute() / 60}turn)`
    const hours = (zone) => `rotate(${zone.hour() / 12}turn)`


    return (
        <div>
            <div>{name}</div>
            <div>{zone.format('HH:mm:ss')}</div>
            <div className="table__icon">
                <img src={iconDelete} onClick={() => handleRemove(id)} alt="delete"/>
            </div>
            <div className="watch">
                <div className="hourhand" style={{ transform: hours(zone) }}></div>
                <div className="minutehand" style={{transform: minutes(zone)}}></div>
                <div className="sechand" style={{transform: second(zone)}}></div>
            </div>
        </div>
    )
}

export default Watch