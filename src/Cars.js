import React, { Component } from 'react';
import {DataView} from 'primereact/dataview';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const url = 'http://localhost:3000/api/cars';

class Cars extends Component {

    constructor() {
        super();
        this.state = { 
            cars: []
        };
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    componentDidMount(){
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    cars: myJson.data
                })
            });
    }

    itemTemplate(car) {
        return (
            <div className="p-grid">
                <div>
                    <span>{car.brand}</span>
                    <span>-</span>
                    <span>{car.year}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Cars">
                <h2>Cars list</h2>
                <DataView value={this.state.cars} layout="list" itemTemplate={this.itemTemplate}></DataView>
            </div>
        );
    }
}

export default Cars;
