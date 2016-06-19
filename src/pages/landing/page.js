import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sideKickHasError: false};
        this.validateSideKick = this.validateSideKick.bind(this); //This probably seems weird but needed...  https://github.com/goatslacker/alt/issues/283
        this.getSidekickError = this.getSidekickError.bind(this); //This probably seems weird but needed...  https://github.com/goatslacker/alt/issues/283
    }
    validateSideKick(event) {
        this.setState({sideKickHasError: event.target.value !== 'Robin'});
    }
    getSidekickError() {
        return this.state.sideKickHasError ? <div><div className="carrot"></div><span className="input-error">Sidekick is a required field.</span></div> : <div></div>;
    }
    render() {
        var sideKickFormClasses = 'form-group '  +  (this.state.sideKickHasError ? 'has-error' : 'valid');
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
                                                <span data-toggle="tooltip" title="" data-placement="right" className="icon-info-circle" data-original-title="Favorite Comic Book Superhero is used to tailor your payroll experience."></span>
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
                            <button type="button" className="btn btn-primary" aria-label="Left Align" data-ember-action="377">
                                <span className="icon-transfer" aria-hidden="true"></span>Open Modal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
