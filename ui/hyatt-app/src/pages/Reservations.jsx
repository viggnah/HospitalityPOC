import { Col, Container, Form, Row, Button, Table, Alert } from "react-bootstrap";
import planetimage from '../images/manage-img.jpeg';
import { useEffect, useState } from "react";
import axios from "axios";
import { Hosts } from "../constants/links";
import { ReservationList } from "../constants/links";

const Reservations = () => {

    // const [customerId, setCustomerId] = useState('');
    // const [submittedCustomerId, setSubmittedCustomerId] = useState('');
    // const [points, setPoints] = useState(0);
    // const [loyaltyAdditionSuccess, setLoyaltyAdditionSuccess] = useState(false);
    const [reservations, setReservations] = useState([]);
    const HOST = Hosts.Loyalty;

    useEffect(() => {
        setReservations(ReservationList);
        // const authorizationHeader = {
        //     headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        // };
        // axios.get(HOST + "/loyalty/all", authorizationHeader).then((responseData) => {
        //     let responseEntries = Object.entries(responseData.data);
        //     setReservations(responseEntries);
        // });
    }, [HOST]);

    return (
        <Container>
            <Row>
                <Col>
                    <Container className="mt-5">
                        {/* <Row>
                            <h1>Add Loyalty Points</h1>
                            {
                                loyaltyAdditionSuccess && <Alert variant="success">Points Added Successfully For {submittedCustomerId} </Alert>
                            }
                        </Row>
                        <Row className="mt-2">
                            <Col md="4">Customer ID : </Col>
                            <Col md="5"><Form.Control size="sm" type="text" placeholder="Enter Customer ID"
                                value={customerId} onChange={event => setCustomerId(event.target.value)} /></Col>
                        </Row>
                        <Row>
                            <Col md="4" >Points : </Col>
                            <Col md="5" >
                                <Form.Control size="sm" type="text" placeholder="Enter Points"
                                    value={points} onChange={event => setPoints(event.target.value)} />
                            </Col>
                        </Row>
                        <Row className="mt-2" >
                            <Col md="4" />
                            <Col md="5" className="d-flex flex-row-reverse" >
                                <Button variant="dark" onClick={submitPoints}>Add</Button>
                            </Col>
                        </Row> */}
                        <Row>
                            <Container className="mt-5">
                                <Row>
                                    <h1>Reservations</h1>
                                </Row>
                                <Row>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>first_name</th>
                                                <th>last_name</th>
                                                <th>email</th>
                                                <th>phone</th>
                                                <th>hotel_code</th>
                                                <th>hotel_name</th>
                                                <th>checkin_date</th>
                                                <th>checkout_date</th>
                                                <th>no_rooms</th>
                                                <th>special_requests</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                reservations.map((reservation, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{reservation.first_name}</td>
                                                            <td>{reservation.last_name}</td>
                                                            <td>{reservation.email}</td>
                                                            <td>{reservation.phone}</td>
                                                            <td>{reservation.hotel_code}</td>
                                                            <td>{reservation.hotel_name}</td>
                                                            <td>{reservation.checkin_date}</td>
                                                            <td>{reservation.checkout_date}</td>
                                                            <td>{reservation.no_rooms}</td>
                                                            <td>{reservation.special_requests}</td>
                                                        </tr>
                                                    )
                                                }
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <img src={planetimage} alt="Loading" style={{ opacity: 0.8 }} width="100%" height="100%" />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Reservations;