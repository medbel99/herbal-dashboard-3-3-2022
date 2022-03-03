import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';



const FormCheckoutInformation = ({ product }) => {
    console.log({ product })
    // "qte":1,
    // "fullNameClient":"Walid BENNANI",
    // "city":"Csablanca",
    // "number":"06798449327",
    // "dateCommande":"2022-02-01T04:00",
    // "idProducts":"zY6HImkVlbBHUH9P25eFj9U"
    const [qte, setQte] = useState(1)
    const [fullNameClient, setFullNameClient] = useState()
    const [city, setCity] = useState()
    const [number, setNumber] = useState()
    return (
        <div>
            <Form
                className="ps-form__billing-info"
            >
                <h3 className="ps-form__heading">Nom Complet</h3>
                <div className="form-group">
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: false,
                                message:
                                    'Enter Le Nom Complet',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            onChange={(e) => setFullNameClient(e.target.value)}
                            placeholder="Nom Complet"
                        />
                    </Form.Item>
                </div>
                <h3 className="ps-form__heading">Ville</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter Votre Ville',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Ville"
                                />
                            </Form.Item>
                        </div>
                    </div>
                <h3 className="ps-form__heading">Telephone</h3>

                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter Votre Numéro De Telephone!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Votre Numéro De Téléphone"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: false,
                                message: 'Enter an address!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Address"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="apartment"
                        rules={[
                            {
                                required: false,
                                message: 'Enter an Apartment!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Apartment, suite, etc. (optional)"
                        />
                    </Form.Item>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter a city!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="city"
                                    placeholder="City"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="postalCode"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter a postal oce!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="postalCode"
                                    placeholder="Postal Code"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="ps-checkbox">
                        <input
                            className="form-control"
                            type="checkbox"
                            id="save-information"
                        />
                        <label htmlFor="save-information">
                            Save this information for next time
                        </label>
                    </div>
                </div>
                <div className="ps-form__submit">
                    <Link href="/account/cart">
                        <a>
                            <i className="icon-arrow-left mr-2"></i>
                            Return to shopping cart
                        </a>
                    </Link>
                    <div className="ps-block__footer">
                        <button className="ps-btn">Continue to shipping</button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default FormCheckoutInformation
