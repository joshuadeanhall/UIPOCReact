import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import LandingModal from './LandingModal.js';
import Tooltip from './Tooltip.js';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sideKickHasError: false,
            isOpen: false,
            dropDownValue: 'Fa',
            records: [{
                id: 1,
                dateStart: '01/01/2016',
                dateEnd: '',
                description: 'Simple Ceasar sniffed his sifter',
                actions: [{
                    description: 'View Request Details'
                }]
            },{
                id: 2,
                dateStart: '06/12/15',
                dateEnd: '06/15/15',
                description: 'Seized his knees',
                actions: [{
                    description: 'Cancel Request'
                },{
                    description: 'View/Edit Request'
                }]
            },{
                id: 3,
                dateStart: '04/27/2015',
                dateEnd: '',
                description: 'And sneezed',
                actions: [{
                    description: 'View Request Details'
                }]
            }
            ]
        };
        this.validateSideKick = this.validateSideKick.bind(this); //This probably seems weird but needed...  https://github.com/goatslacker/alt/issues/283
        this.getSidekickError = this.getSidekickError.bind(this); //This probably seems weird but needed...  https://github.com/goatslacker/alt/issues/283
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateDropDownValue = this.updateDropDownValue.bind(this);
        this.updateRecord = this.updateRecord.bind(this);
    }

    openModal() {
        this.setState({isOpen: true});
    }
    closeModal() {
        this.setState({isOpen: false});
    }
    updateDropDownValue(event) {
        this.setState({dropDownValue: event.target.value})
    }
    validateSideKick(event) {
        this.setState({sideKickHasError: event.target.value !== 'Robin'});
    }
    getSidekickError() {
        return this.state.sideKickHasError ? <div><div className="carrot"></div><span className="input-error">Sidekick is a required field.</span></div> : <div></div>;
    }
    updateRecord(id, newValue) {
        if(typeof newValue === 'undefined') { return; }
        //Really would look to using an immutable library here
        var records = this.state.records;
        var changedList = [].concat(records);
        var index = changedList.findIndex(x => x.id === id);
        changedList[index].description = newValue;
        this.setState({records: changedList});
    }
    render() {
        var sideKickFormClasses = 'form-group '  +  (this.state.sideKickHasError ? 'has-error' : 'valid');
        var date = "06/13/2011";
        return (
            <div>
                <div>
                    <div className="container">
                        <h3>Field Inputs and Validation</h3>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="comicBookHero">Favorite Comic Book Superhero
                                                <Tooltip text="Favorite Comic Book Superhero is used to tailor your payroll experience." />
                                            </label>
                                            <input type="text" className="form-control" id="comicBookHero" placeholder="e.g. Batman" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={ sideKickFormClasses }>
                                            <label for="heroSideKick">Favorite Comic Book Sidekick <span className="required">*</span></label>
                                            <input placeholder="e.g. Robin" type="text" className="form-control"  onBlur={this.validateSideKick} />
                                            {this.getSidekickError()}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <br /><br />
                        <h3>Date Range Picker</h3>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label for="startDate">Start Date</label>
                                                <DateTimeField mode="date" showToday='true' />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label for="endDate">End Date</label>
                                                <DateTimeField mode="date" showToday='true' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <br /><br />
                        <h3>Modal</h3>
                        <div>
                            <button type="button" className="btn btn-primary" aria-label="Left Align" onClick={this.openModal}>
                                <span className="icon-transfer" aria-hidden="true"></span>Open Modal
                            </button>
                        </div>
                    </div>
                </div>

                <LandingModal isOpen={this.state.isOpen} testValue="thisatest1" closeModal={this.closeModal} dropDownValue={this.state.dropDownValue} selectedDate={date} records={this.state.records} updateDropDownValue={this.updateDropDownValue} updateRecord={this.updateRecord} />


                {JSON.stringify(this.state.records)}
            </div>
        );
    }
}
