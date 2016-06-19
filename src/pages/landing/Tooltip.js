import React from "react";

export default class Tooltip extends React.Component {


    propTypes:{
        text: React.PropTypes.string
        };
    
    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({
                trigger: 'click',
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>'
            })
        });
    }

    render() {
        
        return <span data-toggle="tooltip" title="" data-placement="right" className="icon-info-circle" data-original-title={this.props.text}></span>;
    }
}