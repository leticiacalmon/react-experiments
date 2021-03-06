Components
----------

**src/ToggleButton/ToggleButton.js**

### 1. ToggleButton

Button that switches between checked and unchecked.
E.g.
```
class Example extends Component {
  state = {
    isLightOn: false,
  }

  toggle = () => {
    this.setState(({ isLightOn }) => {
      return { isLightOn: !isLightOn };
    })
  }

  render() {
    return (
      <ToggleButton
        onChange={this.toggle}
        isChecked={this.state.isLightOn}
      >Lights?</ToggleButton>
    );
  }
}

...

<Example />
```



Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|""|className applied to the container element in order to change styles from outer world.
children|node|no|null|It is the label representative for the element.
nodeOn|node|no|"On"|It is the representative element for checked.
nodeOff|node|no|"Off"|It is the representative element for unchecked.
onChange|func|yes||It is the event handler for toggling.
isChecked|bool|yes||It is the value for checked/unchecked representation.
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
