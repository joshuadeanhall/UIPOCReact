import React from "react";
import DateTimeField from 'react-bootstrap-datetimepicker';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';

export default class LandingModal extends React.Component {

    propTypes:{
        // You can declare that a prop is a specific JS primitive. By default, these
        // are all optional.
        isOpen: React.PropTypes.bool,
        // optionalBool: React.PropTypes.bool,
        closeModal: React.PropTypes.func,
        dropDownValue: React.PropTypes.string,
        selectedDate: React.PropTypes.string,
        records: React.PropTypes.array,
        updateDropDownValue: React.PropTypes.func,
        updateRecord: React.PropTypes.func
        // optionalNumber: React.PropTypes.number,
        // optionalObject: React.PropTypes.object,
        // optionalString: React.PropTypes.string
        };

    constructor(props) {
        super(props);
        this.updateRecord = this.updateRecord.bind(this);
    }

    getDateString(item) {
        var dateDisplay = item.dateStart;
        if(item.dateEnd) {
            dateDisplay += ` - ${item.dateEnd}`;
        }
        return dateDisplay;
    }


    updateRecord(event, record) {
        var id = parseInt(record.id);
        var newValue = event.target.value;
        this.props.updateRecord(id, newValue);
    }

    render() {
        const {isOpen, closeModal, dropDownValue, selectedDate, records, updateDropDownValue} = this.props;
        var format = "MM/DD/YYYY";

        return <div>
            <Modal isOpen={isOpen} onRequestHide={closeModal}>
                <ModalHeader>
                    <ModalClose onClick={closeModal}/>
                    <ModalTitle>Open Modal</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="dropdown">Dropdown</label>
                                        <select className="form-control" value={dropDownValue} title="Dropdown" onChange={updateDropDownValue}>
                                            <option selected="" value="Select">Select</option>
                                            <option value="Do">Do</option>
                                            <option value="Ray">Ray</option>
                                            <option value="Mi">Mi</option>
                                            <option value="Fa">Fa</option>
                                            <option value="So">So</option>
                                            <option value="La">La</option>
                                            <option value="Ti">Ti</option>
                                            <option value="Do">Do</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="selectDate">Select Date<span className="required">*</span></label>
                                        <DateTimeField mode="date" showToday='true' dateTime={selectedDate} format={format} />
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="radio">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />Radio Button
                            </label>
                        </div>

                        <table className="table table-striped paycor-table">
                            <thead>
                            <tr>
                                <td>Date</td>
                                <td>Description</td>
                                <td><div className="pull-right">Actions</div></td>
                            </tr>
                            </thead>
                            <tbody>
                            {records.map(function(item, i) {
                                return (
                                    <tr key={item.id}>
                                        <td>{this.getDateString(item)}</td>
                                        <td><input id={item.id} className="form-control" defaultValue={item.description} onBlur={(event) => this.updateRecord(event, item)} /></td>
                                        <td>
                                            <div className="btn-group">
                                                <button role="button" type="button" data-toggle="dropdown" className="btn dropdown-toggle btn-default">
                                                    <span className="icon-document"></span><span className="icon-document"></span>
                                                </button>

                                                <ul role="menu" className="dropdown-menu">
                                                    {item.actions.map(function(action) {
                                                        return <li><a id="ember485" href="#/" className="ember-view">{action.description}</a></li>
                                                    }, this)}
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }, this)}
                            </tbody>
                        </table>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-default' onClick={closeModal}>
                        Close
                    </button>
                    <button className='btn btn-primary' onClick={closeModal}>
                        Save changes
                    </button>
                </ModalFooter>
            </Modal>
        </div>
    }
}
