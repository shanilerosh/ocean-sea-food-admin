import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Button } from 'react-bootstrap';

function OrderFilterForm() {
    const [value, onChange] = useState(new Date());
    console.log(value);
    return (
            <div className="row">
                <div className="col">
                    <select name="" id=""></select>
                </div>
            </div>
    );
}

export default OrderFilterForm;
