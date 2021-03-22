import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner';
import Card from '../../components/Card';
import tree from '../../images/tree.jpg';

export default function Topics() {
  const [carddetails, setCarddetails] = useState([
    { img: tree, content: 'data', alt: 'bg-img' },
    { img: tree, content: 'data2', alt: 'bg-img' },
    { img: tree, content: 'data3', alt: 'bg-img' },
    { img: tree, content: 'data2', alt: 'bg-img' },
    { img: tree, content: 'data3', alt: 'bg-img' },
  ]);
  return (
    <>
      <Helmet titleTemplate="%s - Academics" defaultTitle="Academics">
        <meta name="description" content="Academics application" />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <img src={tree} width="100%" />
          </div>
          <div className="col-4 trend">
            <h3>Trending</h3>
            {carddetails.length > 0
              ? carddetails.map(each => {
                  return (
                    <>
                      <Card
                        img={each.img}
                        alt={each.alt}
                        content={each.content}
                        style={'none'}
                      />
                    </>
                  );
                })
              : 'please add something'}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-8">
            <h5>Author: Chinna</h5>
            <br />
            <h5>
              Title:Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem IpsumLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </h5>
            <br />
            <h5>Comments:</h5>
            <br />
            <textarea id="w3review" name="w3review" rows="4" cols="110" />
            <br />
            <button>Comment</button>
          </div>
          <div className="col-4">Adspace</div>
        </div>
      </div>
    </>
  );
}
