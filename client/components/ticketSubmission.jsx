import React from 'react';
import ReactDOM from 'react-dom';

const TicketSubmission = ({submitTickets, ticketCategoryList, location, handleLocationChange}) => (
  <form className="ticket_submission_form">
    <div className="form-group row">
      <div className="col-xs-12"><h3>Create a ticket</h3></div>
    </div>

    <div className="form-group row">
      <div className="col-xs-3">
        <label htmlFor="ticket_submission_category">Category</label>
        <select className="form-control" id="ticket_submission_category" name="category">
          {ticketCategoryList.map((category, index) => <option key={index}>{category}</option>)}
        </select>
      </div>

      <div className="col-xs-5">
        <label htmlFor="ticket_submission_location">Location</label>
        <div className="input-group">
        <input type="text" id="ticket_submission_location" className="form-control" name="location" placeholder={'Your station number'} value={location} onChange={handleLocationChange}/>
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal">
              Use Seating Chart
            </button>
          </span>
        </div>
      </div>  
  
      <div className="col-xs-3">
        <label htmlFor="ticket_submission_private">Private?</label>
        <div className="checkbox">
          <label><input type="checkbox" id="is_private" value=""/></label>
        </div>
      </div>
  
    </div>

    <div className="row">
      <div className="col-xs-10">
        <textarea id="ticket_submission_description" className="form-control" name="description" placeholder="Ticket description"></textarea>
      </div>
      <div className="col-xs-2">
        <button onClick={submitTickets} type="submit" id="ticket_submission_button" className="btn btn-primary">Submit Ticket</button>
      </div>
    </div>
  </form>
);

export default TicketSubmission;
