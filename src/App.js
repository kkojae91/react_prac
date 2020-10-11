import React from 'react';
// proptypes 를 사용하기 위해선 install 해야한다.
// 터미널에 npm i prop-types 해주기!
import PropTypes from "prop-types";

const foodILike = [
    {
        // id값을 줘야 console에 error가 뜨지 않는다.
        id: 1,
        name: "Kimchi",
        image:
        "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image:
        "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 4.9
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
        "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 4.8
    },
    {
        id: 4,
        name: "Doncasu",
        image:
        "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 5.5
    },
    {
        id: 5,
        name: "Kimbap",
        image:
        "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 4.7
    }
  ];


Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
}
// Food(props){    === Food({ fav })
//     props.fav 
// }
function Food({name, picture, rating}){
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            {/* alt는 시각장애인들을 위해 이름을 붙여주는 것 항상 해주기! */}
            <img src={picture} alt={name} />
        </div>
    );
}

// 함수를 따로 만들어서 App함수 안에서 사용할 수 있습니다.
// function renderFood(dish){
//     return <Food name={dish.name} picture={dish.image} />
// }

function App() {
  return (
    <div>
        {/* key = id 값이 항상 존재해야 에러가 나지 않습니다. */}
        {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
        {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;