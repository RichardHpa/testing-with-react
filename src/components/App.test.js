import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });


//This is creating a snapshot.
// The main reason you want to do this is if you are working on a team and you arent wanting any of the front end UI to change. If the UI has been changed by another developer, then the test will fail.
test('App snapshot test', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
