import React from 'react';

class Item extends React.Component {
    render() {
        return  <tr>
                <td>{this.props.name.companyId}</td>

                <td>{this.props.name.name}</td>

                <td>{this.props.name.employees}</td>
                </tr>
        ;
    }
}

class Companies extends React.Component{
    constructor(props){
        super(props);
        this.state = { companies: []};
        this.getData();
    }


    getData() {
        fetch('http://localhost:8080/companies')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    companies: data
                });
            })
    }


    render() {
        return(
            <div>
                <h2>Компании</h2>
                <table>
                        <th scope="row">Номер</th>
                        <th scope="row">Название</th>
                        <th scope="row">Кол-во Сотрудников</th>
                        {
                            this.state.companies.map(function(item){
                                return <Item key={item} name={item} />
                            })
                        }
                </table>
            </div>);
    }
}
module.exports = Companies;