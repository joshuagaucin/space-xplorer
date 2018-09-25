import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendNasaNews } from '../../actions/postNasaNews.js';
import './News.scss';

class News extends Component {

  async componentDidMount() {

    try {
      // Api for Nasa news (NASA'S APOD API)
      const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=k6LiFxfOTe9ulpksPIVs3Ix4BfvYYXAOfKwJK5YK');
      const data = await res.json();

      // Logs data in Redux
      this.props.sendNasaNews(data);

      // Inserts data to DOM
      this.insertHTML(this.props.nasaNews);

    } catch(error) {
        console.log('Error fetching NASA news');
    }
  }

  // Inserts data to DOM
  insertHTML(data) {
    const fail = 'Data Failed To Fetch';

    document.querySelector('.newsHeader').style.background = `#000 url('http://news.bbcimg.co.uk/news/special/2015/newsspec_10077/content/english/img/1024/future_of_news.jpg') no-repeat center center`;
    document.querySelector('.newsDate').textContent = data.date ? data.date + ' | NEWS OF THE DAY' : fail;
    document.querySelector('.newsTitle').textContent = data.title ? data.title : fail;
    document.querySelector('.newsExplanation').innerHTML = data.explanation ? this.parseContent(data.explanation) : fail;
    document.querySelector('.nasaAPOD').src = data.url ? data.url : fail;
    document.querySelector('.nasaAPOD').alt = data.title ? data.title : fail;
    document.querySelector('.nasasNewsAuthor').textContent = data.copyright ? 'By: ' + data.copyright : fail;
  }

  // Separates paragraph into lines
  parseContent(str) {
    return str.split('. ').join('. <br/><br/>');
  }

  render() {
    return(
      <section className="nasaNews" id="news">

        <div className="newsContainer">

          <header className="newsHeader"></header>

          <div className="titleCard">
            <p className="newsDate">Data not fetched</p>
            <h2 className="newsTitle">Data not fetched</h2>
          </div>

          <div className="contentCard">
            <p className="newsExplanation">Data not fetched</p>
            <img className="nasaAPOD" alt=""/>
            <p className="nasasNewsAuthor">Data not fetched</p>
          </div>

        </div>

      </section>
    );
  }
}

// Checks porpTypes for Redux
sendNasaNews.propTypes = {
  postNasaNews: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired
}


// Maps state to props
const mapStateToProps = state => {
  return {nasaNews: state.postNasaNews.nasaNews}
};

export default connect(mapStateToProps, { sendNasaNews })(News);
