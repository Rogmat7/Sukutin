import React from 'react';
import Select, { StylesConfig } from 'react-select';
import Image from 'next/image';

interface TokenOption {
  value: string;
  label: string;
  image: string;
  native?: boolean;
}

interface TokenSelectProps {
  onChange?: (value: TokenOption) => void;
}

const customStyles: StylesConfig<TokenOption, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#1e1e1e',
    border: 'none',
    boxShadow: 'none',
    color: 'white',
    borderRadius: '5px',
    padding: '5px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#2d2d2d' : '#1e1e1e',
    color: 'white',
    '&:hover': {
      backgroundColor: '#2d2d2d',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#1e1e1e',
    border: '1px solid #2d2d2d',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'white',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const TokenSelect: React.FC<TokenSelectProps> = ({ onChange }) => {
  const options: TokenOption[] = [
    {
      value: 'kite',
      label: 'KITE',
      image: 'https://web-assets.same.dev/86918227/3448074577.png',
      native: true
    }
  ];

  const formatOptionLabel = (option: TokenOption) => (
    <div className="select-dropdown">
      <Image src={option.image} alt="K" width={20} height={20} />
      {option.label}
      {option.native && (
        <span style={{ color: '#b4b4b7', fontSize: '10px', marginLeft: '5px' }}>
          Native
        </span>
      )}
    </div>
  );

  return (
    <Select
      styles={customStyles}
      options={options}
      defaultValue={options[0]}
      formatOptionLabel={formatOptionLabel}
      isSearchable={false}
      onChange={(option) => onChange && onChange(option as TokenOption)}
    />
  );
};

export default TokenSelect;
