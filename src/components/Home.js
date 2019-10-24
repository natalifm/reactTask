import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  //All
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  //Delete one
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option; //якщо те на яке ми нажали, то видали, як ні, то лишити
      })
    }));
  };

  //Modal
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    //Міняємо стейт, що при нажиманні відкривалося вікно
    this.setState(() => ({ selectedOption: option }));
  };
  handleOkayButton = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const title = "Task manager";
    const subtitle = "Add your options";

    return (
      // COMPONENT
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>

          <OptionModal
            selectedOption={this.state.selectedOption} //open
            handleOkayButton={this.handleOkayButton} //close
          />
        </div>
      </div>
    );
  }
}

export default App;
