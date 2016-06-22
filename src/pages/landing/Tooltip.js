import React from "react";

export default class Tooltip extends React.Component {


    propTypes:{
        text: React.PropTypes.string
        };
    
    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({
                trigger: 'focus',
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>'
            })
        });
    }

    render() {
        
        return <button type="button" className="btn-icon" data-original-title={this.props.text} data-toggle="tooltip" title="" data-placement="right" ><span className="icon-info-circle" ></span></button>;
    }
}