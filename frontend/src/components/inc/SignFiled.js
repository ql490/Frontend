import React from 'react';

export default function SignFiled({ type, placeholder, value, onChange }) {
    return (
        <div>
            <label>{placeholder}</label>
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                aria-label={placeholder}
                aria-describedby="basic-addon1"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
