import React, {Component} from 'react'
import CreateCaloriesLogButton from './calorieslog/CreateCaloriesLogButton'
import CaloriesLogItem from './CaloriesLogItem'


import {connect} from 'react-redux';
import {getCaloriesLogs} from '../actions/CaloriesLogActions';
import {PropTypes} from 'prop-types';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getCaloriesLogs();
    }
    render(){
        
        const {calorieslogs}=this.props.calorieslogs;
        return(
            <div className="calorieslog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-5 text-center">CALORIES LOG</h1>
                        <br />
                        <CreateCaloriesLogButton/>
                        <br />
                        <hr />
    
                        {
                           
                            <CaloriesLogItem data={calorieslogs}/>
                        
                        }

                    </div>
                </div>
            </div>
        </div>

        )
    }
}
Dashboard.propTypes={
    calorieslogs:PropTypes.object.isRequired,
    getCaloriesLogs:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    calorieslogs:state.calorieslogs
});
export default connect(mapStateToProps,{getCaloriesLogs})(Dashboard);