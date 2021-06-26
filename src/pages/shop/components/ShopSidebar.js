import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CourseSearch from './../../events/components/CourseSearch';
import PriceFilter from './PriceFilter';
import PopularCourse from './../../events/components/PopularCourse';
import CourseTag from './../../events/components/CourseTag';

class ShopSidebar extends Component {
    render() {
        return (
            <div className="course-sidebar">
                <Row>
                    <Col md="12">
                        <CourseSearch />
                    </Col>
                    <Col md="12">
                        <PriceFilter />
                    </Col>
                    <Col md="12">
                        <PopularCourse />
                    </Col>
                    <Col md="12">
                        <CourseTag />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ShopSidebar
