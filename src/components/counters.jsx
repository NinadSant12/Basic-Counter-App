import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{

render(){
    
    return(<div>
       <button onClick={this.props.onReset} className="btn-secondary.btn-sm m2">Reset</button>
      {this.props.counters.map(counter=>(<Counter key={counter.id} counter={counter} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} />
          
          

       ))}
    </div>);
}
}
export default Counters;

