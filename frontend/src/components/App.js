import React from 'react';
import axios from 'axios';
import HomePage from "./HomePage"

class App extends React.Component {

	state = {
		details : [],
	}

	componentDidMount() {

		let data ;

		axios.get('http://localhost:8000/api/test')
		.then(res => {
			data = res.data;
			this.setState({
				details : data	
			});
		})
		.catch(err => {})
	}

render() {
	return(
    // <div id="main">
    //     <div id="app">
    //         <HomePage />
	// 		<RoomJoinPage />
	// 		<CreateRoomPage />
    //     </div>
    // </div>
	<div>
		<HomePage />
	</div>

	);
}
}

export default App;
