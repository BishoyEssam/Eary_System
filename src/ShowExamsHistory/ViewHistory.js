import React, { Component } from 'react';
import './ViewRequests.css';
class ViewHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      History: [
        { date: '12-11-2022', grade: '40/50' },
        { date: '31-10-2021', grade: '27/50' },
        { date: '2-10-2010', grade: '46/50' },
      ],
    };
  }

  render() {
    return (
      <div className="view-requests">
        <h1>History Of Your Exams</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.History.map((request, index) => (
              <tr key={index}>
                <td>{request.date}</td>
                <td>{request.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewHistory;
