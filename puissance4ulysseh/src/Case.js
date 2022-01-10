import React,{ Component} from 'react';
import { connect } from 'react-redux';
import {dropTile} from './actions';

 
 
 class Case extends Component{
     handleClick(){
        console.log('Clicked on column ${this.props.x}')
    this.props.sendTileDrop(this.props.x);
        
    }

     render() {
         const grille = this.props.grille;
         const x = this.props.x;
         const y = this.props.y;

         let classes ='cell';
         if(grille[x][y] !== undefined){
             if (grille[x][y] ==='rouge') {
                 classes += 'p2';
             }else {
                 classes += 'p1';
             }
             
         }
         return (
             <div className={classes} onClick={() => this.handleClick()}>
                <p>{this.props.x},{this.props.y} </p>
             </div>
         )
     }
  }

  const stateToProps = state => {
    return {
        grille: state.grille,
    };
  };
  const dispatchToProps = dispatch => {
    return {
        sendTileDrop: col => dispatch(dropTile(col)),
    
    };
    };
  
 

 export default connect(stateToProps, dispatchToProps)(Case);