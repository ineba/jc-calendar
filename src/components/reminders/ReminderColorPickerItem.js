import React from 'react';
import PropTypes from 'prop-types';
import ReminderColorCircle from './ReminderColorCircle';

function ReminderColorPickerItem({ colorName, onClick }) {
  return (
    <li
      tabIndex="0"
      id="listbox-item-0"
      role="option"
      aria-selected={false}
      className="cursor-pointer select-none relative py-2 pl-3 pr-9 transition duration-200 hover:bg-indigo-100"
      onClick={onClick}
    >
      <div className="flex items-center">
        <ReminderColorCircle colorName={colorName} />
      </div>
    </li>
  );
}

ReminderColorPickerItem.propTypes = {
  colorName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ReminderColorPickerItem;
