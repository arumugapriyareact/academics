import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import tree from '../../images/tree.jpg';
import Card from '../../components/Card';

export default function ClassPage() {
  const [classarticles, setClassarticles] = useState([
    { img: tree, content: 'data', alt: 'bg-img' },
    { img: tree, content: 'data2', alt: 'bg-img' },
  ]);
  return (
    <>
      <Helmet>
        <title>Class Page</title>
        <meta name="description" content="Academics application classpage" />
      </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img src={tree} width="100%" />
          </div>
          <div className="col-5">
            <div className="row">
              <img className="col-6 img-sec" src={tree} />
              <img className="col-6 img-sec" src={tree} />
            </div>
            <div className="row">
              <img className="col-6 img-sec" src={tree} />
              <img className="col-6 img-sec" src={tree} />
            </div>
          </div>
        </div>
        <div className="row latest" style={{ height: '300px' }}>
          <div className="col-8">
            <h3>Subject I</h3>
            {classarticles.length > 0
              ? classarticles.map(each => {
                  console.log(each);
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
          <div className="col-4">ad space</div>
        </div>
      </div>
    </>
  );
}
