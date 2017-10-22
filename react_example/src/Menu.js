import React, {Component} from 'react';



export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            focused: 0
        }
    }

    click(index){
        this.setState({
            focused: index
        });
    }

    render(){

        let itemFunc = (item, index) =>{
            var style = '';
            if(this.state.focused == index){
                style = 'focused';
                console.log(`Focused Item ${item} ${index}`);
            }
            return <li className = {style} onClick = {this.click.bind(this,index)}> {item} </li>;
        }

        return (
            <div>
                <ul>
                    {this.props.items.map(itemFunc)}
                </ul>  
            </div>
        )
        
    }


}
