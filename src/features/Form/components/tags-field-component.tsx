import React, { Component } from 'react'

interface IState {
  items: any[],
  focused: boolean,
  input: string
}

interface IProps {
  name: string,
  title: string
}

export class TagInput extends Component<IProps, IState> {

  state = {
    items: [],
    focused: false,
    input: ''
  }

  handleInputChange = (evt: any) => {
    this.setState({ input: evt.target.value });
  }

  handleInputKeyDown = (evt: any) => {
    if (evt.keyCode === 13) {
      const { value } = evt.target;

      this.setState(state => ({
        items: [...state.items, value],
        input: ''
      }));
    }

    if (this.state.items.length && evt.keyCode === 8 && !this.state.input.length) {
      this.setState(state => ({
        items: state.items.slice(0, state.items.length - 1)
      }));
    }
  }

  handleRemoveItem(index: any) {
    return () => {
      this.setState(state => ({
        items: state.items.filter((item, i) => i !== index)
      }));
    }
  }

  onBlurHandler = () => {
    let { input, items } = this.state

    if(input.length){
      this.setState({
        items: [input, ...items],
        input: ''
      })
    }
  }

  render() {
    let { title, name } = this.props

    return (
      <div className="tags-field">
        <span className="field__title">{title}</span>
        <ul className="tags-field__list">
          {this.state.items.map((item, i) =>
            <li key={i} className="tags-field__item" onClick={this.handleRemoveItem(i)}>
              {item}
            </li>
          )}
          <input
            className="tags-field__input"
            name="hidden"
            value={this.state.input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
            onBlur={this.onBlurHandler} />
            <input type="text" className="hidden" value={this.state.items || this.state.input} name={name} readOnly/>
        </ul>
      </div>
    )
  }
}