import React from 'react'
import { useQuery } from 'react-query'
import AOS from 'aos';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    button: {
      margin: '0.1em',
      zIndex: 999999999999,
      color: 'white',
      borderColor: 'white',
      marginTop: '2vh',
      height: '6vh'
    },
    button2: {
        margin: '0.1em',
        zIndex: 999999999999,
        color: 'white',
        borderColor: 'white',
    },
  });


const Section1 = () => {
    const classes = useStyles();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.spacexdata.com/v3/info').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    AOS.init({
        duration: 2000
    })

    return(
        <React.Fragment>
            <section id='aboutspacex'>
                <div className="viewaboutspacex">
                    <div className='container '>
                        <div className='textabout' data-aos="fade-up">
                            <p>About : {data.name}</p>
                            <h6>SpaceX designs, manufactures and launches advanced rockets and spacecraft.</h6>
                            <h6>The company was founded in 2002 to revolutionize space technology,</h6>
                            <h6>with the ultimate goal of enabling people to live on other planets.</h6>
                            <h6>Founded: {data.founded} Founder: {data.founder}</h6>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Section1