//  import { CgProfile } from "react-icons/cg";

import { Component } from "react";
import "./index.css";

class Home extends Component {
  state = {
    selected: "",
    addloan: false,
    loanType: "",
    mindate: "",
    maxdate: "",
    data: [],
    form: {
      no: 0,
      loanname: "",
      loanType: "",
      loanDataType: "",
      loanValidations: "Nill",
      loanData: "-",
      isMandatory: "",
    },
  };

  onClickAddloan = () => {
    this.setState({ addloan: true });
  };

  onChangeSelect = (event) => {
    this.setState({ selected: event.target.value });
  };

  onChangeloanName = (e) => {
    this.setState((prevState) => ({
      form: { ...prevState.form, loanname: e.target.value },
    }));
  };

  onChangeloanDataType = (e) => {
    this.setState((prevState) => ({
      form: { ...prevState.form, loanDataType: e.target.value },
    }));
  };

  onChangeMandatory = (e) => {
    this.setState((prevState) => ({
      form: { ...prevState.form, isMandatory: e.target.value },
    }));
  };

  onClickConfirm = () => {
    this.setState((prevState) => {
      const { form } = prevState;
      const newDataEntry = { ...form, no: form.no + 1 }; // Increment no for the new entry
      return {
        data: [...prevState.data, newDataEntry],
        form: { ...form, no: form.no + 1 }, // Increment no for the next form
      };
    });
  };

  onChangeloanType = (event) => {
    this.setState({ loanType: event.target.value });
  };

  onChangeMaxLength = (e) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        loanValidations: `Max ${e.target.value} digits`,
      },
    }));
  };

  onChangeloanData = (e) => {
    this.setState((prevState) => ({
      form: { ...prevState.form, loanData: e.target.value },
    }));
  };

  onChangeMinDate = (e) => {
    this.setState({ mindate: e.target.value });
  };

  onChangeMaxDate = (e) => {
    const { mindate } = this.state;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        loanValidations: `Between ${mindate} to ${e.target.value}`,
      },
    }));
  };

  onClickReset = () => {
    this.setState({ data: [] });
  };

  render() {
    const { selected, addloan, loanType, data } = this.state;
    return (
      <div className="homeComponent">
        <select onChange={this.onChangeSelect} className="selection-bar">
          <option value="" disabled selected>
            Select one option
          </option>
          <option value="admin">admin</option>
          <option value="borrower">borrower</option>
          <option value="lender">lender</option>
        </select>

        {selected.length > 0 && (
          <button
            type="button"
            className="addloan-btn"
            onClick={this.onClickAddloan}
          >
            Add loan
          </button>
        )}
        {addloan && (
          <div className="addloan-container">
            <select onChange={this.onChangeloanType} className="selection-bar">
              <option value="" disabled selected>
                Select loan Type
              </option>
              <option value="text">Text Box</option>
              <option value="options">Dropdown</option>
              <option value="date">Date</option>
            </select>
          </div>
        )}
        {loanType.length > 0 && (
          <div className="list-container">
            <div className="loan">
              <p>loan Display Name</p>

              <input
                type="text"
                placeholder="Enter Name"
                className="text-loan"
                value={data.loanname}
                onChange={this.onChangeloanName}
              />
            </div>
            <div className="loan">
              <p>loan Data Type</p>
              <select
                className="selection-bar"
                onChange={this.onChangeloanDataType}
              >
                <option value="" disabled selected>
                  Select Data Type
                </option>
                <option value="number">Number</option>
                <option value="string">String</option>
                <option value="date">Date</option>
              </select>
            </div>
            <div className="loan">
              {loanType !== "date" ? (
                <>
                  <p>loan Max Length Allowed</p>
                  <input
                    type="number"
                    placeholder="Enter Length"
                    className="text-loan"
                    onChange={this.onChangeMaxLength}
                  />
                </>
              ) : (
                <>
                  <p>Date Range Validation</p>
                  <div className="date-loan">
                    <div>
                      <p>Min Date</p>
                      <input
                        type="date"
                        className="text-loan"
                        onChange={this.onChangeMinDate}
                      />
                    </div>
                    <div>
                      <p>Max Date</p>
                      <input
                        type="date"
                        className="text-loan"
                        onChange={this.onChangeMaxDate}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="loan">
              <p>Mandatory</p>
              <select
                className="selection-bar"
                onChange={this.onChangeMandatory}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="loan">
              <p>loan Data</p>
              <input
                type="text"
                placeholder="Enter Data"
                className="text-loan"
                onChange={this.onChangeloanData}
              />
            </div>
            <button type="button" className="btn" onClick={this.onClickConfirm}>
              Confirm
            </button>
          </div>
        )}

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>loan Name</th>
              <th>loan Type</th>
              <th>loan Data Type</th>
              <th>loan Validations</th>
              <th>Loan Data</th>
              <th>Is Mandatory</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.loanname}</td>
                <td>{loanType}</td>
                <td>{item.loanDataType}</td>
                <td>{item.loanValidations}</td>
                <td>{item.loanData}</td>
                <td>{item.isMandatory}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length > 0 && (
          <div className="table-btns">
            <button type="button" className="btn">
              Confirm
            </button>
            <button type="button" onClick={this.onClickReset} className="btn">
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
