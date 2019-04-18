import React from 'react';
//import Myclasscard from './Components/Myclasscard';
import Ttab from './Components/Ttab';
import PersistentDrawerLeft from './Components/PersistentDrawerLeft';

class Teachermain extends React.Component{

    state = {
        class_subjects:[],
        division_they_are_class_teacher_of:'',
        taught_subjects:[]
    }
    componentDidMount(){
        // console.log(this.props.location.state);
        this.setState({
            class_subjects:this.props.location.state.class_subjects,
            division_they_are_class_teacher_of:this.props.location.state.division_they_are_class_teacher_of,
            taught_subjects:this.props.location.state.taught_subjects
        });
    }
    render(){
        console.log(this.state);

        return(
        <div>
               <PersistentDrawerLeft  />


            <Ttab data={this.state}/>
            {/* <Myclasscard /> */}
            </div>
        );
    }

}



export default Teachermain;