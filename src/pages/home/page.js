import React from "react";
import styles from "./style.css";


export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
          <div classname="container">
              <h3>Field Inputs and Validation</h3>
              <div>
                  <form>
                      <div classname="row">
                          <div classname="col-md-4">
                              <div classname="form-group">
                                  <label for="comicBookHero">Favorite Comic Book Superhero
                                      <span data-toggle="tooltip" title="" data-placement="right" classname="icon-info-circle" data-original-title="Favorite Comic Book Superhero is used to tailor your payroll experience."></span>
                                  </label>
                                  <input type="text" classname="form-control" id="comicBookHero" placeholder="e.g. Batman" />
                              </div>
                          </div>
                          <div classname="col-md-3">
                              <div classname="form-group valid">
                                  <label for="heroSideKick">Favorite Comic Book Sidekick <span classname="required">*</span></label>
                                  <input id="ember366" placeholder="e.g. Robin" type="text" classname="form-control ember-view ember-text-field" />
                                      <div classname="valid"></div>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>

              <br /><br />
                  <h3>Date Range Picker</h3>
                  <div>
                      <form>
                          <div classname="row">
                              <div classname="col-md-2">
                                  <div classname="form-group">
                                      <label for="startDate">Start Date</label>
                                      <div id="ember375" classname="ember-view input-group date">
                                          <input type="text" classname="form-control" />
                                              <span classname="input-group-addon"><i classname="glyphicon glyphicon-calendar"></i></span>
                                      </div>
                                  </div>
                              </div>
                              <div classname="col-md-2">
                                  <div classname="form-group">
                                      <label for="endDate">End Date</label>
                                      <div id="ember376" classname="ember-view input-group date">
                                          <input type="text" classname="form-control" />
                                              <span classname="input-group-addon"><i classname="glyphicon glyphicon-calendar"></i></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>

                  <br /><br />
                      <h3>Modal</h3>
                      <div>
                          <button type="button" classname="btn btn-primary" aria-label="Left Align" data-ember-action="377">
                              <span classname="icon-transfer" aria-hidden="true"></span>Open Modal
                          </button>
                      </div>
          </div>
      </div>
    );
  }
}
