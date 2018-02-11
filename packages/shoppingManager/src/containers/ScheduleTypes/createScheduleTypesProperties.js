import React from 'react';
import Button from '../../components/Button';
import Field from '../../components/Field';

/**
 * Creates the structure of the user form
 * @param {object} props
 */
export default function createScheduleTypeProperties(props) {
  const {
    component,
    btnSaveClassName,
  } = props;

  return {
    formItems: [
      ({ item, onSave, ...otherProps }) => (
        <Field
          label="Name"
          id="name"
          value={item.name}
          data-property-name="name"
          {...otherProps}
          hasBar
        />
      ),
      ({ key, onSave }) => (
        <Button
          type="submit"
          className={btnSaveClassName}
          onClick={onSave}
          key={key}
        >
          Salvar
        </Button>
      ),
    ],
    tableHeaderCells: [
      () => 'Name',
    ],
    tableBodyCells: [
      ({ item }) => item.name,
    ],
  };
}