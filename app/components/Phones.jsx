import React from 'react';

class Item extends React.Component {
    render() {
        return  <tr>
            <td>{this.props.name.phoneId}</td>
            <td>{this.props.name.name}</td>
            <td>{this.props.name.price}</td>
            <td>{this.props.name.companyId}</td>
        </tr>;
    }
}

class Phones extends React.Component{
    constructor(props){
        super(props);
        this.state = { phones: []};
        this.getData();
    }


    getData() {
        fetch('http://localhost:8080/phones')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    phones: data
                });
            })
    }


    render() {
        return(
            <div>
                <h2>Телефоны</h2>
                <table>
                    <th scope="row">Номер</th>
                    <th scope="row">Название</th>
                    <th scope="row">Цена</th>
                    <th scope="row">Номер компании</th>
                    {
                        this.state.phones.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </table>
            </div>);
    }
}
module.exports = Phones;