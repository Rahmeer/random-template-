import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, CardActions, CardContent } from '@material-ui/core';
import Carousels from './Components/Carousels';
const Demo = () => {
  return (
    <div className="container">
      <div className="container_main">
        <br />
        <br />
        <Card className="root">
          <CardContent>
            <div className="first_sec">
              <div className="top">
                <div className="top_left">
                  <img
                    src="https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1523322228/content-items/002/321/325/capitan_america1-original.jpg?1523322228"
                    alt=""
                  />
                </div>
                <div className="top_right">
                  <div className="right_top">
                    <p>ElLiot Thomson</p>
                    <span>Associate Editor</span>
                  </div>
                  <div className="right_bottom">
                    <div className="right_btm_detail">
                      <p>Article</p>
                      <span>34</span>
                    </div>
                    <div className="right_btm_detail">
                      <p>Followers</p>
                      <span>980</span>
                    </div>
                    <div className="right_btm_detail">
                      <p>Rating</p>
                      <span>8.9</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <Button className="bottom_btn" variant="outlined">
                  Chat
                </Button>
                <Button
                  className="bottom_btn"
                  variant="contained"
                  color="primary"
                >
                  Follow
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="second_sec">
          <p>Notables Works</p>
          <span>Based on the popularity of articles</span>
          <Carousels />
        </div>

        <div className="last_sec">
          <Card className="last_">
            <CardActions>
              <Button>Feature Article</Button>
            </CardActions>
            <CardContent>
              <p>
                Natural mood regular low or even absent in people with
                depression
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="container_background"></div>
    </div>
  );
};

export default Demo;
