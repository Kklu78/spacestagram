import React, {useContext} from 'react';
import './App.css';
import Header from "./components/Header";
import Feed from "./components/Feed";
import { Grid } from "semantic-ui-react";
import { AppContext } from './context/AppContext';



function App() {
  const {apiSearch, title} = useContext(AppContext)

  return (
    <>
    		<Grid>
			<Grid.Row>
				<Grid.Column>
					<Header />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
        <Feed />
				</Grid.Column>
			</Grid.Row>
		</Grid>
    </>
    );
}

export default App;
