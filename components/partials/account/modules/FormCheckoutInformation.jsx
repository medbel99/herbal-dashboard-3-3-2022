import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form } from 'antd';
import axios from 'axios';
import swal from 'sweetalert';
import { useRouter } from 'next/router'


const FormCheckoutInformation = ({ product }) => {
    const router = useRouter();
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
    const  redirect = ()=>{
        swal({
            title: "شكراً لك على ثقتك في متجرنا",
            text: "سوف يتصل بيك أحد موظفينا لتأكيد طلبك",
            icon: "success",
            button: "OK",
          });
          router.push("/")
    }
    const addCommande = async  (e)=>{
        e.preventDefault();
        let dataToSend = {
            fullNameClient,
            city,
            qte,
            number,
            dateCommande: new Date().toJSON(),
            idProducts:product.idClientProducts
        }
        console.log({dataToSend})
     const  resposne =   await axios.post("https://herbalbackend.herokuapp.com/api/commande/add_commande",dataToSend);
     redirect()
     console.log({resposne})
    }
    return (
        <div>
            <form onSubmit={addCommande}
                  className="ps-form__billing-info"
            >
                <h3 className="ps-form__heading">Information</h3>
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
                        <input
                            className="form-control"
                            type="text"
                            onChange={(e) => setFullNameClient(e.target.value)}
                            placeholder="Nom Complet"
                        />
                    </Form.Item>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <Form.Item
                                name="number"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter Votre Numéro De Telephone!',
                                    },
                                ]}>
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setNumber(e.target.value)}
                                    placeholder="Numéro De Téléphone"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter Votre Ville',
                                    },
                                ]}>
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Ville"
                                />
                            </Form.Item>
                        </div>
                    </div>


                    <div className="col-sm-3">
                        <div className="form-group">
                            <Form.Item
                                name="qte"
                                rules={[
                                    {
                                        required: false,
                                    },
                                ]}>
                                <input
                                    className="form-control"
                                    type="number"
                                    value={qte}
                                    defaultValue={qte}
                                    min={1}
                                    onChange={(e) => setQte(e.target.value)}
                                    placeholder="Quantité"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="ps-form__submit">
                    <div className="ps-block__footer">
                        <button type='sumbit' className="ps-btn">Commander</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormCheckoutInformation
