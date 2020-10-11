// const foodILike = [
//     {
//         // id값을 줘야 console에 error가 뜨지 않는다.
//         id: 1,
//         name: "Kimchi",
//         image:
//         "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//         rating: 5
//     },
//     {
//         id: 2,
//         name: "Samgyeopsal",
//         image:
//         "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//         rating: 4.9
//     },
//     {
//         id: 3,
//         name: "Bibimbap",
//         image:
//         "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//         rating: 4.8
//     },
//     {
//         id: 4,
//         name: "Doncasu",
//         image:
//         "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//         rating: 5.5
//     },
//     {
//         id: 5,
//         name: "Kimbap",
//         image:
//         "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//         rating: 4.7
//     }
//   ];


// Food.propTypes = {
//     name : PropTypes.string.isRequired,
//     picture : PropTypes.string.isRequired,
//     rating : PropTypes.number.isRequired
// }
// // Food(props){    === Food({ fav })
// //     props.fav 
// // }
// function Food({name, picture, rating}){
//     return (
//         <div>
//             <h2>I like {name}</h2>
//             <h4>{rating}/5.0</h4>
//             {/* alt는 시각장애인들을 위해 이름을 붙여주는 것 항상 해주기! */}
//             <img src={picture} alt={name} />
//         </div>
//     );
// }

// // 함수를 따로 만들어서 App함수 안에서 사용할 수 있습니다.
// // function renderFood(dish){
// //     return <Food name={dish.name} picture={dish.image} />
// // }

// function App() {
//   return (
//     <div>
//         {/* key = id 값이 항상 존재해야 에러가 나지 않습니다. */}
//         {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
//         {/* {foodILike.map(renderFood)} */}
//     </div>
//   );
// }

// class App extends React.Component{
//     state = {
//         count :0
//     };
//     add = () => {
//         this.setState( current => ({count: current.count +1}) );
//         // console.log("add");
//         // 아래와 같이 코드를 작성하면 수정된 값이 적용되지 않습니다.
//         // this.state.count = 1;
//     }
//     minus = () => {
//         this.setState( current => ({count: current.count -1}) );
//         // console.log("minus");
//         // 아래와 같이 코드를 작성하면 수정된 값이 적용되지 않습니다.
//         // this.state.count = -1;
//     }
//     componentDidMount(){
//         console.log("Component rendered!");
//     }
//     componentDidUpdate(){
//         console.log("I just update!");
//     }
//     render(){
//         console.log("I'm rendering!");
//         return (
//             <div>
//                 <h1>The number is : {this.state.count}</h1>
//                 <button onClick={this.add}>Add</button>
//                 <button onClick={this.minus}>Minus</button>
//             </div>
//         )
//     }
// }


import React from 'react';
// proptypes 를 사용하기 위해선 install 해야한다.
// 터미널에 npm i prop-types 해주기!
import PropTypes from "prop-types";

class App extends React.Component{
    state ={
        isLoading: true,

    };
    // rendering 한 후에 호출 된다. 6000 6초 후에 didMount 실행
    componentDidMount(){
        setTimeout(
            () => {
                this.setState({isLoading:false});
            }
        , 6000);
    }
    render(){
        const {isLoading} = this.state;
        return(
            // maybe isLoading ? "Loading...":"We are ready"
            // ?는 true false 를 의미 하는 듯 true 이면 앞의 "Loading"을 실행, false이면 뒤의 "We are ready"를 실행 해준다.
            <div>{isLoading ? "Loading..." : "We are ready"}</div>
        )
    }
}
export default App;