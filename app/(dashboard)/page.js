'use client'
// import node module libraries
import { Fragment } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import PieChart from "./charts/PieChart";
import CandlestickChart from "./charts/CandlestickChart";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";

const Home = () => {
    return (
        <Fragment>
            <div className="pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">

                {/* Active Projects  */}
                {/* <ActiveProjects /> */}
                <Row className="my-6">

                    {/* card  */}
                    <Col xl={6} lg={6} md={12} xs={12}>

                        {/* Teams  */}
                        <BarChart/>

                    </Col>
                    <Col xl={6} lg={6} md={12} xs={12}>

                        {/* Teams  */}
                        <PieChart/>

                    </Col>
                    <Col xl={6} lg={6} md={12} xs={12}>

                        {/* Teams  */}
                        <LineChart/>

                    </Col>
                    <Col xl={6} lg={6} md={12} xs={12}>

                        {/* Teams  */}
                        <CandlestickChart/>

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default Home;
