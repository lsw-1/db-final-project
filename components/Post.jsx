import React from 'react'

export default class Post extends React.Component {
    constructor(){
        super();
    }

    render = () => {
        return <div className="card-text">
            <h4>A post</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi cumque hic
                illum ipsum, maiores minima natus numquam sed? Debitis facere magnam molestiae mollitia,
                numquam perferendis quae repellendus sint veniam.
            </p>
            <div><p className="col-lg-4">2016-01-14</p> <p className="col-lg-4">By LUDA</p></div>
        </div>
    }
}