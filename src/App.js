import React from 'react'
import { Cards, Chart, CountryPicker } from './components'

import styles from  './App.module.css'
import { fetchData } from  './api'

import covidimg from './images/image.png'

export default class App extends React.Component {
    state = {
        data : {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data : fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data : fetchedData, country : country })
    }

    render(){
        const { data , country } = this.state
        return(
            <div className={styles.container}>
                <img src={covidimg} alt="covid image" className={styles.image} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}