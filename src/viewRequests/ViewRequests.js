import React, { Component } from 'react';
import './ViewRequests.css';
class ViewRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [
        { name: 'John Doe', email: 'johndoe@example.com' },
        { name: 'Jane Smith', email: 'janesmith@example.com' },
        { name: 'Bob Johnson', email: 'bobjohnson@example.com' },
      ],
    };
  }

  handleApproveRequest(request) {
    // TODO: handle approve request logic
    console.log(`Approved request from ${request.name} (${request.email})`);
    // remove request from the array
    const updatedRequests = this.state.requests.filter((r) => r !== request);
    this.setState({ requests: updatedRequests });
  }

  handleDeleteRequest(request) {
    // TODO: handle delete request logic
    console.log(`Deleted request from ${request.name} (${request.email})`);
    // remove request from the array
    const updatedRequests = this.state.requests.filter((r) => r !== request);
    this.setState({ requests: updatedRequests });
  }

  render() {
    return (
      <div className="view-requests">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.requests.map((request, index) => (
              <tr key={index}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>
                  <button className="approve-button" onClick={() => this.handleApproveRequest(request)}>
                    Approve
                  </button>
                  <button className="delete-button" onClick={() => this.handleDeleteRequest(request)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewRequests;
